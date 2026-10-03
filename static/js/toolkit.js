/* Portala Tools — shared UI helpers (vanilla, MIT-style original code) */
window.PortalaTools = (function () {
  'use strict';

  function copyText(text, done, fail) {
    var failSafe = function () {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        if (ok) { done(); } else if (fail) { fail(); }
      } catch (e) {
        if (fail) { fail(); }
      }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, failSafe);
    } else {
      failSafe();
    }
  }

  function setStatus(id, text, isError) {
    var el = document.getElementById(id);
    if (!el) { return; }
    el.textContent = text;
    el.classList.toggle('tool-status-error', !!isError);
    el.classList.toggle('tool-status-ok', !isError);
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  return {
    copyText: copyText,
    setStatus: setStatus,
    onReady: onReady
  };
})();
