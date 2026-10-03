/* Portala Tools — Cron Expression Parser (ranges, lists, steps, wildcards) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  function expandField(field, min, max, isDow) {
    var set = {};
    String(field).split(',').forEach(function (part) {
      part = part.trim();
      if (part === '') { throw new Error('Empty field part in "' + field + '".'); }
      var stepMatch = /\/(\d+)$/.exec(part);
      var step = stepMatch ? parseInt(stepMatch[1], 10) : 1;
      var base = stepMatch ? part.slice(0, stepMatch.index) : part;
      var lo, hi;
      if (base === '*' || base === '') { lo = min; hi = max; }
      else if (base.indexOf('-') >= 0) {
        var seg = base.split('-');
        lo = parseInt(seg[0], 10); hi = parseInt(seg[1], 10);
      } else { lo = parseInt(base, 10); hi = lo; }
      if (isNaN(lo) || isNaN(hi) || lo < min || hi > max || lo > hi) {
        throw new Error('Value out of range: "' + field + '".');
      }
      for (var v = lo; v <= hi; v += step) {
        var key = isDow && v === 7 ? 0 : v; /* 7 = Sunday */
        set[key] = true;
      }
    });
    return Object.keys(set).map(Number).sort(function (a, b) { return a - b; });
  }

  /* Parse a 5- or 6-field cron expression into sets of allowed values. */
  function parseCron(expr) {
    var parts = String(expr).trim().split(/\s+/);
    if (parts.length !== 5 && parts.length !== 6) {
      throw new Error('Cron expression must have 5 or 6 fields.');
    }
    var minute, hour, dom, month, dow;
    if (parts.length === 6) {
      minute = parts[1]; hour = parts[2]; dom = parts[3]; month = parts[4]; dow = parts[5];
    } else {
      minute = parts[0]; hour = parts[1]; dom = parts[2]; month = parts[3]; dow = parts[4];
    }
    return {
      minute: expandField(minute, 0, 59, false),
      hour: expandField(hour, 0, 23, false),
      dom: expandField(dom, 1, 31, false),
      month: expandField(month, 1, 12, false),
      dow: expandField(dow, 0, 6, true)
    };
  }

  function describeField(field, unit) {
    field = String(field).trim();
    if (field === '*') { return 'every ' + unit; }
    var step = /^\*\/(\d+)$/.exec(field);
    if (step) { return 'every ' + step[1] + ' ' + unit; }
    var single = /^\d+$/.exec(field);
    if (single) { return 'at ' + field + ' ' + unit; }
    var rangeStep = /^(\d+)-(\d+)\/(\d+)$/.exec(field);
    if (rangeStep) {
      return 'from ' + rangeStep[1] + ' to ' + rangeStep[2] + ' ' + unit + ' every ' + rangeStep[3];
    }
    var range = /^(\d+)-(\d+)$/.exec(field);
    if (range) { return 'from ' + range[1] + ' to ' + range[2] + ' ' + unit; }
    if (field.indexOf(',') >= 0) { return 'on ' + field + ' ' + unit; }
    return field + ' ' + unit;
  }

  /* Human-readable, field-by-field breakdown. */
  function describeCron(expr) {
    var parts = String(expr).trim().split(/\s+/);
    if (parts.length !== 5 && parts.length !== 6) {
      throw new Error('Cron expression must have 5 or 6 fields.');
    }
    var i = parts.length === 6 ? 1 : 0;
    return [
      { field: 'minute', desc: describeField(parts[i], 'minutes') },
      { field: 'hour', desc: describeField(parts[i + 1], 'hours') },
      { field: 'dayOfMonth', desc: describeField(parts[i + 2], 'days of month') },
      { field: 'month', desc: describeField(parts[i + 3], 'months') },
      { field: 'dayOfWeek', desc: describeField(parts[i + 4], 'days of week') }
    ];
  }

  /* Next `count` execution times at minute precision, starting after `from`. */
  function nextRuns(expr, count, from) {
    var sets = parseCron(expr);
    var minuteSet = sets.minute, hourSet = sets.hour, domSet = sets.dom,
      monthSet = sets.month, dowSet = sets.dow;
    var minuteOk = {}, hourOk = {}, domOk = {}, monthOk = {}, dowOk = {};
    minuteSet.forEach(function (v) { minuteOk[v] = true; });
    hourSet.forEach(function (v) { hourOk[v] = true; });
    domSet.forEach(function (v) { domOk[v] = true; });
    monthSet.forEach(function (v) { monthOk[v] = true; });
    dowSet.forEach(function (v) { dowOk[v] = true; });

    var d = from ? new Date(from) : new Date();
    d.setSeconds(0, 0);
    d.setMinutes(d.getMinutes() + 1);
    var runs = [];
    var guard = 0;
    while (runs.length < count && guard < 527040) {
      if (monthOk[d.getMonth() + 1] && domOk[d.getDate()] && dowOk[d.getDay()] &&
          hourOk[d.getHours()] && minuteOk[d.getMinutes()]) {
        runs.push(new Date(d));
      }
      d.setMinutes(d.getMinutes() + 1);
      guard++;
    }
    return runs;
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('cron-parser-input');
      var out = document.getElementById('cron-parser-output');
      var status = document.getElementById('cron-parser-status');
      if (!input || !out || !status) { return; }

      function describe() {
        try {
          var desc = describeCron(input.value);
          var lines = desc.map(function (d) { return d.field.padEnd(12) + ' ' + d.desc; });
          var runs = nextRuns(input.value, 5, new Date());
          lines.push('');
          lines.push('Next 5 runs:');
          runs.forEach(function (r) {
            lines.push('  ' + r.toLocaleString());
          });
          out.textContent = lines.join('\n');
          PortalaTools.setStatus('cron-parser-status', 'Parsed successfully.', false);
        } catch (e) {
          out.textContent = '';
          PortalaTools.setStatus('cron-parser-status', e.message, true);
        }
      }

      function example() {
        input.value = '0 12 * * 1-5';
        out.textContent = '';
        PortalaTools.setStatus('cron-parser-status', 'Sample loaded. Press Parse.', false);
      }

      function clearAll() {
        input.value = '';
        out.textContent = '';
        PortalaTools.setStatus('cron-parser-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('cron-parser-btn-parse', describe);
      btn('cron-parser-btn-example', example);
      btn('cron-parser-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      parseCron: parseCron,
      describeCron: describeCron,
      describeField: describeField,
      nextRuns: nextRuns,
      expandField: expandField
    };
  }
})();
