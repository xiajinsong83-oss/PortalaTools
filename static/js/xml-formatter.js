/* Portala Tools — XML Formatter & Validator (pure JS, stack-based) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  /* Stack-based validator that skips XML declarations, comments, CDATA and PIs. */
  function validateXml(xml) {
    xml = String(xml == null ? '' : xml);
    if (xml.trim() === '') {
      return { valid: false, error: 'Input is empty.', position: -1 };
    }
    var i = 0, n = xml.length, stack = [];
    while (i < n) {
      if (xml[i] !== '<') { i++; continue; }

      if (xml.startsWith('<!--', i)) {
        var ce = xml.indexOf('-->', i + 4);
        if (ce === -1) { return { valid: false, error: 'Unclosed comment.', position: i }; }
        i = ce + 3; continue;
      }
      if (xml.startsWith('<![CDATA[', i)) {
        var cde = xml.indexOf(']]>', i + 9);
        if (cde === -1) { return { valid: false, error: 'Unclosed CDATA section.', position: i }; }
        i = cde + 3; continue;
      }
      if (xml.startsWith('<?', i)) {
        var pie = xml.indexOf('?>', i + 2);
        if (pie === -1) { return { valid: false, error: 'Unclosed processing instruction.', position: i }; }
        i = pie + 2; continue;
      }
      if (xml[i + 1] === '/') {
        var te = xml.indexOf('>', i);
        if (te === -1) { return { valid: false, error: 'Malformed closing tag.', position: i }; }
        var name = xml.slice(i + 2, te).trim();
        if (stack.length === 0) {
          return { valid: false, error: 'Unexpected closing tag </' + name + '>.', position: i };
        }
        if (stack[stack.length - 1] !== name) {
          return { valid: false, error: 'Mismatched tags: expected </' + stack[stack.length - 1] + '> but found </' + name + '>.', position: i };
        }
        stack.pop();
        i = te + 1; continue;
      }
      var tagEnd = xml.indexOf('>', i);
      if (tagEnd === -1) { return { valid: false, error: 'Malformed opening tag.', position: i }; }
      var inner = xml.slice(i + 1, tagEnd);
      var selfClose = inner.charAt(inner.length - 1) === '/';
      var core = (selfClose ? inner.slice(0, -1) : inner).trim();
      var m = /^([A-Za-z_][\w:.-]*)/.exec(core);
      if (!m) { return { valid: false, error: 'Invalid tag name.', position: i }; }
      if (!selfClose) { stack.push(m[1]); }
      i = tagEnd + 1; continue;
    }
    if (stack.length > 0) {
      return { valid: false, error: 'Unclosed tag <' + stack[stack.length - 1] + '>.', position: -1 };
    }
    return { valid: true, error: null, position: -1 };
  }

  /* String-based re-indenter. Throws when input is invalid. */
  function formatXml(xml) {
    var v = validateXml(xml);
    if (!v.valid) { throw new Error(v.error); }
    var i = 0, n = xml.length, depth = 0, out = [];
    var indent = function (d) { return new Array(d + 1).join('  '); };
    while (i < n) {
      if (xml[i] === '<') {
        if (xml.startsWith('<!--', i)) {
          var ce = xml.indexOf('-->', i); out.push(indent(depth) + xml.slice(i, ce + 3)); i = ce + 3; continue;
        }
        if (xml.startsWith('<![CDATA[', i)) {
          var cde = xml.indexOf(']]>', i); out.push(indent(depth) + xml.slice(i, cde + 3)); i = cde + 3; continue;
        }
        if (xml.startsWith('<?', i)) {
          var pie = xml.indexOf('?>', i); out.push(indent(depth) + xml.slice(i, pie + 2)); i = pie + 2; continue;
        }
        if (xml[i + 1] === '/') {
          depth = Math.max(0, depth - 1);
          var te = xml.indexOf('>', i);
          out.push(indent(depth) + xml.slice(i, te + 1));
          i = te + 1; continue;
        }
        var tagEnd = xml.indexOf('>', i);
        var selfClose = xml.charAt(tagEnd - 1) === '/';
        out.push(indent(depth) + xml.slice(i, tagEnd + 1));
        if (!selfClose) { depth++; }
        i = tagEnd + 1; continue;
      }
      var next = xml.indexOf('<', i);
      var text = xml.slice(i, next === -1 ? n : next).trim();
      if (text) { out.push(indent(depth) + text); }
      i = next === -1 ? n : next;
    }
    return out.join('\n');
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('xml-formatter-input');
      var out = document.getElementById('xml-formatter-output');
      var status = document.getElementById('xml-formatter-status');
      if (!input || !out || !status) { return; }

      var EXAMPLE = '<?xml version="1.0"?><catalog><book id="1"><title>XML Guide</title></book><!-- note --><note><![CDATA[raw & text]]></note></catalog>';

      function format() {
        try {
          out.textContent = formatXml(input.value);
          PortalaTools.setStatus('xml-formatter-status', 'XML formatted successfully.', false);
        } catch (e) {
          out.textContent = '';
          PortalaTools.setStatus('xml-formatter-status', e.message, true);
        }
      }

      function validate() {
        var r = validateXml(input.value);
        if (r.valid) {
          PortalaTools.setStatus('xml-formatter-status', 'Valid XML.', false);
        } else {
          out.textContent = '';
          PortalaTools.setStatus('xml-formatter-status', 'Invalid XML: ' + r.error, true);
        }
      }

      function copy() {
        if (!out.textContent) {
          PortalaTools.setStatus('xml-formatter-status', 'Nothing to copy yet — run Format first.', true);
          return;
        }
        PortalaTools.copyText(out.textContent, function () {
          PortalaTools.setStatus('xml-formatter-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('xml-formatter-status', 'Copy failed — select the text and copy manually.', true);
        });
      }

      function example() {
        input.value = EXAMPLE;
        out.textContent = '';
        PortalaTools.setStatus('xml-formatter-status', 'Sample loaded. Press Format or Validate.', false);
      }

      function clearAll() {
        input.value = '';
        out.textContent = '';
        PortalaTools.setStatus('xml-formatter-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('xml-formatter-btn-format', format);
      btn('xml-formatter-btn-validate', validate);
      btn('xml-formatter-btn-copy', copy);
      btn('xml-formatter-btn-example', example);
      btn('xml-formatter-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      validateXml: validateXml,
      formatXml: formatXml
    };
  }
})();
