/* ============================================================
   Portala Tools — generic auto-tool engine (extended)
   Archetypes: transform | pick | timer | clock | color-cycle |
   keytest | mousetest | speaker | pomodoro | stopwatch | metronome
   All client-side; nothing uploaded.
============================================================ */
(function () {
  'use strict';

  /* ================= transform functions ================= */
  function csvParse(t) {
    var rows = []; var row = []; var cur = ''; var q = false;
    for (var i = 0; i < t.length; i++) {
      var c = t[i];
      if (q) {
        if (c === '"') { if (t[i + 1] === '"') { cur += '"'; i++; } else q = false; }
        else cur += c;
      } else {
        if (c === '"') q = true;
        else if (c === ',') { row.push(cur); cur = ''; }
        else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
        else cur += c;
      }
    }
    row.push(cur); rows.push(row);
    return rows.filter(function (r) { return r.length > 1 || r[0] !== ''; });
  }
  var MD = {
    '#': '<h1>', '##': '<h2>', '###': '<h3>', '**': '<strong>', '`': '<code>'
  };
  function md(t) {
    return t.split('\n').map(function (l) {
      if (/^### /.test(l)) return '<h3>' + l.slice(4) + '</h3>';
      if (/^## /.test(l)) return '<h2>' + l.slice(3) + '</h2>';
      if (/^# /.test(l)) return '<h1>' + l.slice(2) + '</h1>';
      return '<p>' + l.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/`(.+?)`/g, '<code>$1</code>') + '</p>';
    }).join('\n');
  }
  var CN_DIG = ['零','一','二','三','四','五','六','七','八','九'];
  function toCN(n) {
    n = parseInt(n, 10); if (isNaN(n)) return '';
    if (n < 0) return '负' + toCN(-n);
    if (n < 10) return CN_DIG[n];
    if (n < 20) return '十' + (n % 10 ? CN_DIG[n % 10] : '');
    if (n < 100) return CN_DIG[Math.floor(n / 10)] + '十' + (n % 10 ? CN_DIG[n % 10] : '');
    return n.toLocaleString('zh-CN');
  }
  var MORSE = { a:'.-',b:'-...',c:'-.-.',d:'-..',e:'.',f:'..-.',g:'--.',h:'....',i:'..',j:'.---',k:'-.-',l:'.-..',m:'--',n:'-.',o:'---',p:'.--.',q:'--.-',r:'.-.',s:'...',t:'-',u:'..-',v:'...-',w:'.--',x:'-..-',y:'-.--',z:'--..', '0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.' };
  var MORSE_REV = {}; Object.keys(MORSE).forEach(function (k) { MORSE_REV[MORSE[k]] = k; });
  var ROMAN = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  function toRoman(n) { n = parseInt(n, 10) || 0; var s = ''; ROMAN.forEach(function (v) { while (n >= v[0]) { s += v[1]; n -= v[0]; } }); return s; }

  var TR = {
    upper: function (s) { return s.toUpperCase(); },
    lower: function (s) { return s.toLowerCase(); },
    'title-case': function (s) { return s.replace(/\w\S*/g, function (w) { return w[0].toUpperCase() + w.slice(1).toLowerCase(); }); },
    'remove-spaces': function (s) { return s.replace(/\s+/g, ''); },
    'trim-lines': function (s) { return s.split('\n').map(function (l) { return l.trim(); }).join('\n'); },
    'remove-blank-lines': function (s) { return s.split('\n').filter(function (l) { return l.trim() !== ''; }).join('\n'); },
    'sort-lines': function (s) { return s.split('\n').sort(function (a, b) { return a.localeCompare(b); }).join('\n'); },
    'sort-lines-desc': function (s) { return s.split('\n').sort(function (a, b) { return b.localeCompare(a); }).join('\n'); },
    'dedupe-lines': function (s) { var seen = {}; return s.split('\n').filter(function (l) { if (seen[l.trim()]) return false; seen[l.trim()] = 1; return true; }).join('\n'); },
    'reverse-text': function (s) { return s.split('').reverse().join(''); },
    'reverse-words': function (s) { return s.split(/\s+/).reverse().join(' '); },
    'strip-html': function (s) { var d = document.createElement('div'); d.innerHTML = s; return d.textContent || ''; },
    'escape-html': function (s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); },
    'base64-encode': function (s) { return btoa(unescape(encodeURIComponent(s))); },
    'base64-decode': function (s) { return decodeURIComponent(escape(atob(s.trim()))); },
    'url-encode': function (s) { return encodeURIComponent(s); },
    'url-decode': function (s) { return decodeURIComponent(s); },
    'count-chars': function (s) { return 'Characters: ' + s.length + '\nLines: ' + s.split('\n').length + '\nWords: ' + (s.trim() ? s.trim().split(/\s+/).length : 0); },
    'camel-case': function (s) { return s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (_, c) { return c.toUpperCase(); }); },
    'snake-case': function (s) { return s.trim().replace(/([a-z0-9])([A-Z])/g, '$1_$2').replace(/[\s-]+/g, '_').toLowerCase(); },
    'kebab-case': function (s) { return s.trim().replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase(); },
    'collapse-spaces': function (s) { return s.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim(); },
    'to-half-width': function (s) { return s.replace(/[\uFF01-\uFF5E]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); }).replace(/\u3000/g, ' '); },
    'to-full-width': function (s) { return s.replace(/[\x21-\x7E]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) + 0xFEE0); }).replace(/ /g, '\u3000'); },
    'csv-to-json': function (s) { var rows = csvParse(s); var h = rows[0]; return JSON.stringify(rows.slice(1).map(function (r) { var o = {}; h.forEach(function (k, i) { o[k] = r[i]; }); return o; }), null, 2); },
    'markdown-to-html': md,
    'morse-encode': function (s) { return s.toLowerCase().split('').map(function (c) { return MORSE[c] || c; }).join(' '); },
    'morse-decode': function (s) { return s.trim().split(/\s*\/?\s+/).map(function (w) { return MORSE_REV[w] || ''; }).join(''); },
    'to-chinese-numeral': function (s) { return s.split(/[\s,]+/).map(function (n) { return n + ' → ' + toCN(n); }).join('\n'); },
    'to-roman': function (s) { return s.split(/[\s,]+/).map(function (n) { return n + ' → ' + toRoman(n); }).join('\n'); },
    'binary-to-text': function (s) { return s.trim().split(/\s+/).map(function (b) { return String.fromCharCode(parseInt(b, 2)); }).join(''); },
    'text-to-binary': function (s) { return s.split('').map(function (c) { return c.charCodeAt(0).toString(2).padStart(8, '0'); }).join(' '); },
    'timestamp-now': function () { return 'Unix seconds: ' + Math.floor(Date.now() / 1000) + '\nUnix ms: ' + Date.now() + '\nISO: ' + new Date().toISOString(); },
    'hex-to-rgb': function (s) { var h = s.trim().replace('#',''); if (h.length === 3) h = h.split('').map(function(c){return c+c;}).join(''); var n = parseInt(h, 16); return 'rgb(' + ((n>>16)&255) + ', ' + ((n>>8)&255) + ', ' + (n&255) + ')'; },
    'rgb-to-hex': function (s) { var m = s.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/); if (!m) return 'Enter r,g,b'; return '#' + [m[1],m[2],m[3]].map(function(v){return (+v).toString(16).padStart(2,'0');}).join(''); }
  };

  /* ================= pick pools ================= */
  var NICK = ['月下独酌','偷心盗贼','快乐打工人','咸鱼翻身','星辰大海','温柔本身','傲娇的猫','南巷清风','浅笑倾城','时光旅人','追风少年','橘子海','北岛失晴','半度微凉','风居住的街道'];
  var LOVE = ['遇见你，是所有故事的开始。','今天的风很温柔，像你。','你是今天和明天都想见的人。','月色和雪色之间，你是第三种绝色。','醒来觉得甚是爱你。','山河远阔，人间烟火，无一是你，无一不是你。'];
  var ANSWER = ['当然可以！','注定如此。','再想想看。','千万别。','值得一试。','听从内心。','时机未到。','放心去做。','结果会很好。','天机不可泄露。'];
  var GAME = ['暗夜猎手','峡谷之影','一枪爆头','御剑飞行','输出机器','苟王之王','闪现王者','野区霸主'];
  var EN_NAME = ['Olivia','Liam','Emma','Noah','Ava','Ethan','Mia','Lucas','Zoe','Caleb','Nora','Julian'];
  function rnd(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
  function pick(arr) { return arr[rnd(0, arr.length - 1)]; }

  var PICK = {
    'dice-roller': function () { return '🎲 ' + rnd(1, 6); },
    'dice-d20': function () { return '🎲 d20 → ' + rnd(1, 20); },
    'dice-2d6': function () { return '🎲 ' + rnd(1, 6) + ' + ' + rnd(1, 6); },
    'coin-flip': function () { return '🪙 ' + pick(['Heads 正面', 'Tails 反面']); },
    'yes-no': function () { return pick(['✅ Yes', '❌ No', '🤔 Maybe']); },
    'random-number': function () { return '🎯 ' + rnd(1, 100); },
    'random-number-1000': function () { return '🎯 ' + rnd(1, 1000); },
    'lottery-3d': function () { return '🔢 ' + String(rnd(0, 9)) + String(rnd(0, 9)) + String(rnd(0, 9)); },
    'uuid': function () { return crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 1; return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16); }); },
    'password': function () { var c = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789!@#$'; return Array.from({length: 16}, function () { return c[rnd(0, c.length - 1)]; }).join(''); },
    'nickname': function () { return pick(NICK); },
    'love-line': function () { return '💌 ' + pick(LOVE); },
    'answer-book': function () { return '📖 ' + pick(ANSWER); },
    'game-name': function () { return pick(GAME) + pick(GAME); },
    'english-name': function () { return pick(EN_NAME) + ' ' + pick(EN_NAME); },
    'what-to-eat': function () { return '🍜 ' + pick(['火锅', '烧烤', '拉面', '炒饭', '沙拉', '汉堡', '寿司', '饺子', '麻辣烫', '披萨']); },
    'draw-straws': function () { return pick(['长签 ✅', '短签', '长签', '长签']); },
    'gift-exchange': function () { return '🎁 抽一位送出礼物！'; },
    'weighted-picker': function () { return '🎯 选中：选项 #' + rnd(1, 5); }
  };

  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }

  /* ================= renderers ================= */
  function renderTransform(root) {
    var fn = root.getAttribute('data-fn');
    var label = root.getAttribute('data-label') || 'Input';
    root.innerHTML =
      '<div class="tool-field"><label class="tool-label">' + label + '</label>' +
      '<textarea class="tool-textarea at-in" placeholder="Paste text here…"></textarea></div>' +
      '<div class="tool-actions"><button class="tool-btn at-go">Run</button>' +
      '<button class="tool-btn tool-btn-secondary at-copy">Copy</button>' +
      '<button class="tool-btn tool-btn-secondary at-clear">Clear</button></div>' +
      '<div class="tool-field"><label class="tool-label">Output</label>' +
      '<pre class="tool-output at-out"></pre></div>';
    var f = TR[fn];
    root.querySelector('.at-go').onclick = function () {
      try { root.querySelector('.at-out').textContent = f ? f(root.querySelector('.at-in').value) : ''; }
      catch (e) { root.querySelector('.at-out').textContent = 'Error: ' + e.message; }
    };
    root.querySelector('.at-copy').onclick = function () { var t = root.querySelector('.at-out').textContent; if (t && navigator.clipboard) navigator.clipboard.writeText(t); };
    root.querySelector('.at-clear').onclick = function () { root.querySelector('.at-in').value = ''; root.querySelector('.at-out').textContent = ''; };
  }

  function renderPick(root) {
    var fn = root.getAttribute('data-fn');
    root.innerHTML =
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Generate</button>' +
      '<button class="tool-btn tool-btn-secondary at-copy">Copy</button></div>' +
      '<pre class="tool-output at-out" style="text-align:center;font-size:1.25rem;min-height:60px"></pre>';
    var f = PICK[fn];
    root.querySelector('.at-go').onclick = function () { root.querySelector('.at-out').textContent = f ? f() : ''; };
    root.querySelector('.at-copy').onclick = function () { var t = root.querySelector('.at-out').textContent; if (t && navigator.clipboard) navigator.clipboard.writeText(t); };
  }

  function renderCountdown(root) {
    root.innerHTML =
      '<div class="tool-field"><label class="tool-label">Seconds</label><input class="tool-input at-sec" type="number" value="60" min="1"></div>' +
      '<div class="tool-time-display at-disp">60</div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-start">Start</button><button class="tool-btn tool-btn-secondary at-stop">Reset</button></div>';
    var t = null;
    root.querySelector('.at-start').onclick = function () {
      clearInterval(t);
      var left = parseInt(root.querySelector('.at-sec').value, 10) || 0;
      root.querySelector('.at-disp').textContent = left;
      t = setInterval(function () { left--; root.querySelector('.at-disp').textContent = left; if (left <= 0) { clearInterval(t); root.querySelector('.at-disp').textContent = '⏰ Done!'; } }, 1000);
    };
    root.querySelector('.at-stop').onclick = function () { clearInterval(t); };
  }

  function renderStopwatch(root) {
    root.innerHTML = '<div class="tool-time-display at-disp">0.0s</div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Start</button><button class="tool-btn tool-btn-secondary at-reset">Reset</button></div>';
    var t = null, start = 0, running = false;
    root.querySelector('.at-go').onclick = function () {
      if (!running) { start = Date.now(); running = true; this.textContent = 'Pause';
        t = setInterval(function () { root.querySelector('.at-disp').textContent = ((Date.now() - start) / 1000).toFixed(1) + 's'; }, 100);
      } else { running = false; clearInterval(t); this.textContent = 'Resume'; }
    };
    root.querySelector('.at-reset').onclick = function () { running = false; clearInterval(t); root.querySelector('.at-disp').textContent = '0.0s'; root.querySelector('.at-go').textContent = 'Start'; };
  }

  function renderClock(root) {
    root.innerHTML = '<div class="tool-time-display at-disp" style="font-size:3rem"></div>';
    function tick() { root.querySelector('.at-disp').textContent = new Date().toLocaleTimeString(); }
    tick(); setInterval(tick, 1000);
  }

  function renderColorCycle(root) {
    root.innerHTML = '<div class="tool-field"><label class="tool-label">Click a color to test your screen</label></div>' +
      '<div class="tool-grid-2"><button class="tool-btn at-c" style="background:#fff;color:#000">White</button><button class="tool-btn at-c" style="background:#000;color:#fff">Black</button>' +
      '<button class="tool-btn at-c" style="background:#f00">Red</button><button class="tool-btn at-c" style="background:#0f0">Green</button>' +
      '<button class="tool-btn at-c" style="background:#00f">Blue</button></div>' +
      '<div class="tool-field"><pre class="tool-output at-out" style="min-height:40px">Click any button to fill the screen with that color; press ESC to exit.</pre></div>';
    root.querySelectorAll('.at-c').forEach(function (b) {
      b.onclick = function () {
        var fs = document.createElement('div');
        fs.style.cssText = 'position:fixed;inset:0;z-index:99999;background:' + b.style.background + ';cursor:pointer';
        fs.onclick = function () { document.body.removeChild(fs); };
        document.body.appendChild(fs);
      };
    });
  }

  function renderKeyTest(root) {
    root.innerHTML = '<div class="tool-time-display at-disp" style="font-size:2rem">Press any key…</div>';
    document.onkeydown = function (e) { root.querySelector('.at-disp').textContent = e.key + '  (' + e.code + ')'; };
  }

  function renderMouseTest(root) {
    root.innerHTML = '<div class="tool-time-display at-disp" style="font-size:1.4rem">Click / scroll your mouse here</div>' +
      '<pre class="tool-output at-out"></pre>';
    root.addEventListener('mousedown', function (e) { root.querySelector('.at-out').textContent += 'Button ' + e.button + ' pressed\n'; });
    root.addEventListener('wheel', function () { root.querySelector('.at-out').textContent += 'Wheel scrolled\n'; });
  }

  function renderSpeaker(root) {
    root.innerHTML = '<div class="tool-actions" style="justify-content:center">' +
      '<button class="tool-btn at-l">Left channel</button><button class="tool-btn at-r">Right channel</button></div>';
    function beep(pan) {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      var o = ctx.createOscillator(); var g = ctx.createGain(); var p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
      o.frequency.value = 440; o.connect(g); g.connect(p || ctx.destination); if (p) { p.pan.value = pan; p.connect(ctx.destination); }
      g.gain.value = 0.2; o.start(); setTimeout(function () { o.stop(); ctx.close(); }, 500);
    }
    root.querySelector('.at-l').onclick = function () { beep(-1); };
    root.querySelector('.at-r').onclick = function () { beep(1); };
  }

  function renderPomodoro(root) {
    root.innerHTML = '<div class="tool-time-display at-disp">25:00</div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Start Focus</button><button class="tool-btn tool-btn-secondary at-reset">Reset</button></div>';
    var t = null, left = 25 * 60;
    function paint() { root.querySelector('.at-disp').textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); }
    root.querySelector('.at-go').onclick = function () {
      if (t) { clearInterval(t); t = null; this.textContent = 'Start Focus'; return; }
      this.textContent = 'Pause';
      t = setInterval(function () { left--; paint(); if (left <= 0) { clearInterval(t); t = null; left = 25 * 60; paint(); } }, 1000);
    };
    root.querySelector('.at-reset').onclick = function () { clearInterval(t); t = null; left = 25 * 60; paint(); };
  }

  /* ===== new renderers ===== */
  function renderTyping(root) {
    var words = 'the quick brown fox jumps over the lazy dog while developers code fast and browsers render pages beautifully every single day'.split(' ');
    function sample() { var w = []; for (var i = 0; i < 30; i++) w.push(words[Math.floor(Math.random()*words.length)]); return w; }
    root.innerHTML = '<p class="tool-label at-pass"></p>' +
      '<textarea class="tool-textarea at-in" rows="3" placeholder="Start typing above words here…"></textarea>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Restart</button></div>' +
      '<pre class="tool-output at-out">WPM: 0  Accuracy: —</pre>';
    var start = null, cur = sample();
    function paintPass() { root.querySelector('.at-pass').innerHTML = cur.map(function (w, i) { return '<span data-w="' + i + '">' + w + '</span>'; }).join(' '); }
    paintPass();
    root.querySelector('.at-in').addEventListener('input', function () {
      if (!start) start = Date.now();
      var typed = this.value.split(' '); var correct = 0;
      cur.forEach(function (w, i) { if (typed[i] === w) correct++; });
      var mins = (Date.now() - start) / 60000;
      var wpm = mins > 0 ? Math.round(correct / mins) : 0;
      root.querySelector('.at-out').textContent = 'WPM: ' + wpm + '   Correct words: ' + correct + '/' + cur.length;
    });
    root.querySelector('.at-go').onclick = function () { cur = sample(); start = null; root.querySelector('.at-in').value = ''; paintPass(); root.querySelector('.at-out').textContent = 'WPM: 0'; };
  }

  function renderSchulte(root) {
    root.innerHTML = '<div class="tool-time-display at-disp">Click 1,2,3… in order</div><div class="at-grid" style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;max-width:340px;margin:12px auto"></div>';
    var g = root.querySelector('.at-grid'), next = 1, t0 = null;
    function build() {
      g.innerHTML = ''; next = 1;
      var nums = []; for (var i = 1; i <= 25; i++) nums.push(i);
      for (var i = nums.length - 1; i > 0; i--) { var j = Math.floor(Math.random()*(i+1)); var tmp = nums[i]; nums[i] = nums[j]; nums[j] = tmp; }
      nums.forEach(function (n) {
        var b = document.createElement('button'); b.className = 'tool-btn'; b.textContent = n;
        b.onclick = function () {
          if (!t0) t0 = Date.now();
          if (+b.textContent === next) { b.style.opacity = '.25'; next++;
            if (next > 25) { root.querySelector('.at-disp').textContent = 'Done! ' + ((Date.now()-t0)/1000).toFixed(1) + 's'; t0 = null; setTimeout(build, 800); }
          }
        };
        g.appendChild(b);
      });
    }
    build();
  }

  function renderReaction(root) {
    root.innerHTML = '<div class="tool-time-display at-box" style="min-height:200px;display:flex;align-items:center;justify-content:center;background:#e5e7eb;border-radius:12px;cursor:pointer">Click to start</div>';
    var box = root.querySelector('.at-box'), state = 0, t = null, t0 = 0;
    box.onclick = function () {
      if (state === 0) { box.style.background = '#fca5a5'; box.textContent = 'Wait for green…'; state = 1;
        t = setTimeout(function () { box.style.background = '#86efac'; box.textContent = 'CLICK!'; t0 = Date.now(); state = 2; }, 1200 + Math.random() * 2500);
      } else if (state === 1) { clearTimeout(t); box.style.background = '#fecaca'; box.textContent = 'Too soon! Click to retry.'; state = 0;
      } else if (state === 2) { box.textContent = ((Date.now() - t0)) + ' ms! Click to retry.'; state = 0; }
    };
  }

  function renderCps(root) {
    root.innerHTML = '<div class="tool-time-display at-disp">5.0s</div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Start / Click the box</button></div>' +
      '<div class="at-box" style="height:140px;background:#dbeafe;border-radius:12px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.2rem">Clicks: 0</div>';
    var clicks = 0, left = 5, running = false;
    function paint() { root.querySelector('.at-disp').textContent = left.toFixed(1) + 's'; root.querySelector('.at-box').textContent = 'Clicks: ' + clicks; }
    root.querySelector('.at-box').onclick = function () {
      if (!running) { running = true; clicks = 0; left = 5;
        var t = setInterval(function () { left -= 0.1; if (left <= 0) { clearInterval(t); running = false; paint(); return; } paint(); }, 100);
      }
      clicks++; paint();
    };
  }

  function renderQuiz(root) {
    root.innerHTML = '<div class="tool-time-display at-q">—</div>' +
      '<div class="tool-grid-2"><input class="tool-input at-a" placeholder="your answer"><button class="tool-btn at-go">Check</button></div>' +
      '<pre class="tool-output at-out"></pre>';
    var a = 0;
    function ask() {
      var x = Math.ceil(Math.random()*12), y = Math.ceil(Math.random()*12); a = x * y;
      root.querySelector('.at-q').textContent = x + ' × ' + y + ' = ?'; root.querySelector('.at-a').value = '';
    }
    ask();
    root.querySelector('.at-go').onclick = function () {
      var v = parseInt(root.querySelector('.at-a').value, 10);
      root.querySelector('.at-out').textContent = (v === a) ? '✅ Correct!' : '❌ Answer: ' + a;
      ask();
    };
  }

  function renderLed(root) {
    root.innerHTML = '<div class="tool-field"><label class="tool-label">Text</label><input class="tool-input at-in" value="PORTALASER"></div>' +
      '<div style="background:#000;color:#ff2a00;font:bold 40px/60px monospace;overflow:hidden;white-space:nowrap;border-radius:8px"><span class="at-out" style="display:inline-block;padding-left:100%">LED</span></div>';
    var out = root.querySelector('.at-out'); var t = setInterval(function () {
      var txt = root.querySelector('.at-in').value;
      out.textContent = txt + '  •  ' + txt + '  •  ';
      var x = 100; t = setInterval(function () { x -= 1; out.style.transform = 'translateX(' + x + 'px)'; if (x < -out.scrollWidth) x = 0; }, 30);
    }, 100);
  }

  function renderNote(root) {
    root.innerHTML = '<div class="tool-field"><label class="tool-label">Sticky note (saved in your browser)</label>' +
      '<textarea class="tool-textarea at-in" rows="6" placeholder="Write something…"></textarea></div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-save">Save</button><button class="tool-btn tool-btn-secondary at-clear">Clear</button></div>' +
      '<pre class="tool-output at-out"></pre>';
    var key = 'portalaser-note';
    root.querySelector('.at-in').value = localStorage.getItem(key) || '';
    root.querySelector('.at-save').onclick = function () { localStorage.setItem(key, root.querySelector('.at-in').value); root.querySelector('.at-out').textContent = '✅ Saved locally'; };
    root.querySelector('.at-clear').onclick = function () { localStorage.removeItem(key); root.querySelector('.at-in').value = ''; };
  }

  function renderTodo(root) {
    root.innerHTML = '<div class="tool-field"><input class="tool-input at-in" placeholder="Add a task…"></div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-add">Add</button></div><ul class="at-list" style="list-style:none;padding:0"></ul>';
    var list = JSON.parse(localStorage.getItem('portalaser-todo') || '[]');
    function paint() { root.querySelector('.at-list').innerHTML = list.map(function (t, i) { return '<li style="padding:8px;border-bottom:1px solid #eee"><span>' + t + '</span> <button data-i="' + i + '" class="tool-btn tool-btn-secondary at-del" style="float:right">×</button></li>'; }).join('');
      root.querySelectorAll('.at-del').forEach(function (b) { b.onclick = function () { list.splice(+this.dataset.i, 1); localStorage.setItem('portalaser-todo', JSON.stringify(list)); paint(); }; });
    }
    paint();
    root.querySelector('.at-add').onclick = function () { var v = root.querySelector('.at-in').value.trim(); if (!v) return; list.push(v); localStorage.setItem('portalaser-todo', JSON.stringify(list)); root.querySelector('.at-in').value = ''; paint(); };
  }

  function renderDraw(root) {
    root.innerHTML = '<canvas class="at-cv" width="600" height="300" style="border:1px solid #e2e8f0;border-radius:8px;background:#fff;max-width:100%"></canvas>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-clear">Clear</button><button class="tool-btn at-save">Download</button></div>';
    var cv = root.querySelector('.at-cv'), ctx = cv.getContext('2d'), d = false;
    cv.onmousedown = function (e) { d = true; ctx.beginPath(); ctx.moveTo(e.offsetX, e.offsetY); };
    cv.onmousemove = function (e) { if (!d) return; ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke(); };
    cv.onmouseup = function () { d = false; };
    root.querySelector('.at-clear').onclick = function () { ctx.clearRect(0, 0, cv.width, cv.height); };
    root.querySelector('.at-save').onclick = function () { var a = document.createElement('a'); a.download = 'drawing.png'; a.href = cv.toDataURL(); a.click(); };
  }

  function renderTts(root) {
    root.innerHTML = '<div class="tool-field"><label class="tool-label">Text to speak</label><textarea class="tool-textarea at-in" rows="4" placeholder="Type something…"></textarea></div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">🔊 Speak</button></div>';
    root.querySelector('.at-go').onclick = function () {
      if (!('speechSynthesis' in window)) { alert('Your browser does not support speech synthesis.'); return; }
      speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(root.querySelector('.at-in').value); speechSynthesis.speak(u);
    };
  }

  function renderNoise(root) {
    root.innerHTML = '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-w">White noise</button><button class="tool-btn at-p">Pink noise</button><button class="tool-btn at-s">Stop</button></div>' +
      '<pre class="tool-output at-out">Plays ambient noise locally.</pre>';
    var actx = null, src = null;
    function start(pink) {
      stop(); actx = new (window.AudioContext || window.webkitAudioContext)();
      var buf = actx.createBuffer(1, actx.sampleRate * 2, actx.sampleRate); var d = buf.getChannelData(0);
      for (var i = 0; i < d.length; i++) { var w = Math.random() * 2 - 1; d[i] = pink ? w * 0.4 : w; }
      src = actx.createBufferSource(); src.buffer = buf; src.loop = true; src.connect(actx.destination); src.start();
    }
    function stop() { try { if (src) src.stop(); } catch (e) {} }
    root.querySelector('.at-w').onclick = function () { start(false); };
    root.querySelector('.at-p').onclick = function () { start(true); };
    root.querySelector('.at-s').onclick = stop;
  }

  function renderBreath(root) {
    root.innerHTML = '<div class="at-circle" style="width:160px;height:160px;border-radius:50%;background:#93c5fd;margin:20px auto;display:flex;align-items:center;justify-content:center;transition:all 4s"></div>' +
      '<div class="tool-time-display at-disp">Breathe in…</div>';
    var phases = [['Breathe in', 4000], ['Hold', 4000], ['Breathe out', 4000]]; var i = 0;
    setInterval(function () {
      var c = root.querySelector('.at-circle');
      root.querySelector('.at-disp').textContent = phases[i][0];
      c.style.transform = (phases[i][0] === 'Breathe in') ? 'scale(1.3)' : (phases[i][0] === 'Breathe out' ? 'scale(1)' : 'scale(1.3)');
      i = (i + 1) % 3;
    }, 4000);
  }

  function renderSymbols(root) {
    var syms = ['★','☆','✦','✧','♥','♡','♦','♢','♣','♠','☺','☹','✈','☂','☃','☀','☁','♪','♫','→','←','↑','↓','⇒','⇐','⇑','⇓','©','®','™','℃','℉','‰','€','£','¥','§','¶','×','÷','≠','≈','≤','≥','∞','√','∑','∫','π','µ','×','÷','℃'];
    root.innerHTML = '<div class="at-grid" style="display:grid;grid-template-columns:repeat(8,1fr);gap:6px"></div><pre class="tool-output at-out">Click a symbol to copy.</pre>';
    var g = root.querySelector('.at-grid');
    syms.forEach(function (s) { var b = document.createElement('button'); b.className = 'tool-btn'; b.textContent = s;
      b.onclick = function () { navigator.clipboard.writeText(s); root.querySelector('.at-out').textContent = 'Copied: ' + s; }; g.appendChild(b); });
  }

  function renderColorBlind(root) {
    var plates = [[2, [0, 200, 180]], [5, [200, 100, 50]], [7, [150, 150, 50]], [9, [100, 180, 100]], [3, [180, 80, 80]]];
    var idx = 0;
    root.innerHTML = '<div class="at-plate" style="width:200px;height:200px;border-radius:50%;margin:16px auto;position:relative;background:#f0e6d2"></div>' +
      '<div class="tool-actions" style="justify-content:center"><input class="tool-input at-a" style="max-width:80px" placeholder="?"><button class="tool-btn at-go">Submit</button></div>' +
      '<pre class="tool-output at-out"></pre>';
    function draw() {
      var p = plates[idx], plate = root.querySelector('.at-plate'); plate.innerHTML = '';
      for (var i = 0; i < 120; i++) {
        var d = document.createElement('div'); var ang = Math.random() * Math.PI * 2, r = Math.random() * 85;
        d.style.cssText = 'position:absolute;width:' + (8 + Math.random() * 10) + 'px;height:' + (8 + Math.random()*10) + 'px;border-radius:50%;left:' + (100 + Math.cos(ang)*r) + 'px;top:' + (100 + Math.sin(ang)*r) + 'px;background:hsl(' + (p[1][0] + Math.random()*40 - 20) + ',60%,55%)';
        plate.appendChild(d);
      }
    }
    draw();
    root.querySelector('.at-go').onclick = function () {
      var v = +root.querySelector('.at-a').value;
      root.querySelector('.at-out').textContent = v === plates[idx][0] ? '✅ Correct!' : '❌ It was ' + plates[idx][0];
      idx = (idx + 1) % plates.length; draw(); root.querySelector('.at-a').value = '';
    };
  }

  function renderPwStrength(root) {
    root.innerHTML = '<div class="tool-field"><label class="tool-label">Password</label><input class="tool-input at-in" type="text"></div>' +
      '<div class="tool-actions"><div class="at-bar" style="flex:1;height:8px;background:#e5e7eb;border-radius:4px"><div class="at-fill" style="height:100%;width:0%;background:#ef4444;border-radius:4px"></div></div></div>' +
      '<pre class="tool-output at-out">Strength: —</pre>';
    root.querySelector('.at-in').oninput = function () {
      var v = this.value, s = 0;
      if (v.length >= 8) s++; if (/[A-Z]/.test(v)) s++; if (/[0-9]/.test(v)) s++; if (/[^a-zA-Z0-9]/.test(v)) s++;
      var colors = ['#ef4444','#f97316','#eab308','#22c55e'];
      root.querySelector('.at-fill').style.width = (s / 4 * 100) + '%'; root.querySelector('.at-fill').style.background = colors[s];
      root.querySelector('.at-out').textContent = ['Very weak','Weak','OK','Strong','Very strong'][s] + '  (' + v.length + ' chars)';
    };
  }

  function renderLookup(root) {
    var tables = {
      zodiac: { '鼠':'Rat 1972,1984,1996','牛':'Ox 1973,1985,1997','虎':'Tiger 1974,1986,1998','兔':'Rabbit 1975,1987,1999','龙':'Dragon 1976,1988,2000','蛇':'Snake 1977,1989,2001','马':'Horse 1978,1990,2002','羊':'Goat 1979,1991,2003','猴':'Monkey 1980,1992,2004','鸡':'Rooster 1981,1993,2005','狗':'Dog 1982,1994,2006','猪':'Pig 1983,1995,2007' },
      garbage: { '废纸/纸箱':'可回收 recyclable','塑料瓶':'可回收 recyclable','剩菜果皮':'厨余 food waste','电池':'有害 hazardous','过期药品':'有害 hazardous','烟蒂':'其他 other','陶瓷':'其他 other','玻璃':'可回收 recyclable' },
      shoe: { '36':'US 5 / UK 3','37':'US 6 / UK 4','38':'US 7 / UK 5','39':'US 7.5 / UK 5.5','40':'US 8.5 / UK 6.5','41':'US 9 / UK 7','42':'US 10 / UK 8' },
      paper: { 'A4':'210 × 297 mm','A5':'148 × 210 mm','A3':'297 × 420 mm','Letter':'216 × 279 mm','Legal':'216 × 356 mm' },
      solar: { '立春':'Feb 3-5','雨水':'Feb 18-20','惊蛰':'Mar 5-7','春分':'Mar 20-22','清明':'Apr 4-6','立夏':'May 5-7' }
    };
    var key = root.getAttribute('data-fn') || 'zodiac', t = tables[key] || tables.zodiac;
    root.innerHTML = '<div class="at-grid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px"></div>';
    var g = root.querySelector('.at-grid');
    Object.keys(t).forEach(function (k) { var d = document.createElement('div'); d.style.cssText = 'padding:8px;border:1px solid #e2e8f0;border-radius:6px;font-size:.9rem'; d.innerHTML = '<b>' + k + '</b><br><span style="color:#64748b">' + t[k] + '</span>'; g.appendChild(d); });
  }

  function renderTemplate(root) {
    var tpl = root.getAttribute('data-fn') || 'Weekly report: did / doing / blockers.';
    root.innerHTML = '<div class="tool-field"><label class="tool-label">Template</label><textarea class="tool-textarea at-in" rows="6">' + tpl + '</textarea></div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-copy">Copy to clipboard</button></div>';
    root.querySelector('.at-copy').onclick = function () { navigator.clipboard.writeText(this.previousElementSibling.value); };
  }

  /* ===== batch 3 renderers ===== */
  function renderInfo(root) {
    root.innerHTML = '<pre class="tool-output at-out"></pre>';
    var info = {
      'Browser': navigator.userAgent.split(') ')[0].split('(').pop() || navigator.userAgent,
      'Language': navigator.language,
      'Platform': navigator.platform,
      'Cookies enabled': navigator.cookieEnabled,
      'Screen': screen.width + ' × ' + screen.height,
      'Viewport': innerWidth + ' × ' + innerHeight,
      'Pixel ratio': window.devicePixelRatio,
      'Online': navigator.onLine,
      'Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    root.querySelector('.at-out').textContent = Object.keys(info).map(function (k) { return k + ': ' + info[k]; }).join('\n');
  }
  function renderCamera(root) {
    root.innerHTML = '<video class="at-vid" autoplay playsinline style="width:100%;border-radius:8px;background:#000;max-height:300px"></video>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Start camera</button></div>';
    root.querySelector('.at-go').onclick = function () {
      navigator.mediaDevices.getUserMedia({ video: true }).then(function (s) { root.querySelector('.at-vid').srcObject = s; }).catch(function (e) { alert('Camera error: ' + e.message); });
    };
  }
  function renderMic(root) {
    root.innerHTML = '<div class="tool-time-display at-disp">0 dB</div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Start mic</button></div>';
    root.querySelector('.at-go').onclick = function () {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
        var ctx = new (window.AudioContext || window.webkitAudioContext)(); var an = ctx.createAnalyser(); var src = ctx.createMediaStreamSource(s); src.connect(an);
        var data = new Uint8Array(an.frequencyBinCount);
        (function loop() { an.getByteFrequencyData(data); var sum = data.reduce(function (a, b) { return a + b; }, 0); var avg = Math.round(sum / data.length * 2); root.querySelector('.at-disp').textContent = avg + ' dB'; requestAnimationFrame(loop); })();
      }).catch(function (e) { alert('Mic error: ' + e.message); });
    };
  }
  function renderGamepad(root) {
    root.innerHTML = '<pre class="tool-output at-out">Press a button / move a stick on your gamepad…</pre>';
    function poll() {
      var gp = navigator.getGamepads ? navigator.getGamepads()[0] : null;
      if (gp) { root.querySelector('.at-out').textContent = gp.buttons.map(function (b, i) { return b.pressed ? 'Btn' + i + ' ' : ''; }).join('') + '\nAxes: ' + gp.axes.map(function (a) { return a.toFixed(2); }).join(', '); }
      requestAnimationFrame(poll);
    } poll();
  }
  function renderTouch(root) {
    root.innerHTML = '<div class="tool-time-display at-disp">Touch this area…</div><pre class="tool-output at-out"></pre>';
    root.addEventListener('touchstart', function (e) { root.querySelector('.at-out').textContent = 'Touches: ' + e.touches.length; });
  }
  function renderRefresh(root) {
    root.innerHTML = '<div class="tool-time-display at-disp">— Hz</div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Measure</button></div>';
    root.querySelector('.at-go').onclick = function () {
      var f = Date.now(), n = 0;
      (function loop() { n++; if (Date.now() - f < 1000) requestAnimationFrame(loop); else root.querySelector('.at-disp').textContent = n + ' Hz'; })();
    };
  }
  function renderSpeed(root) {
    root.innerHTML = '<div class="tool-time-display at-disp">— Mbps</div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Test download speed</button></div>';
    root.querySelector('.at-go').onclick = function () {
      var s = Date.now();
      fetch('/favicon.ico').then(function (r) { return r.blob(); }).then(function (b) {
        var sec = (Date.now() - s) / 1000; var mbps = (b.size * 8 / 1024 / 1024) / sec;
        root.querySelector('.at-disp').textContent = mbps.toFixed(2) + ' Mbps';
      });
    };
  }
  function renderHash(root) {
    root.innerHTML = '<div class="tool-field"><label class="tool-label">Text</label><textarea class="tool-textarea at-in" rows="3"></textarea></div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Hash</button></div><pre class="tool-output at-out"></pre>';
    var which = root.getAttribute('data-fn') || 'SHA-256';
    root.querySelector('.at-go').onclick = function () {
      var buf = new TextEncoder().encode(root.querySelector('.at-in').value);
      crypto.subtle.digest(which, buf).then(function (h) {
        root.querySelector('.at-out').textContent = which + ':\n' + Array.from(new Uint8Array(h)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
      });
    };
  }
  function renderCss(root) {
    var kind = root.getAttribute('data-fn') || 'radius';
    if (kind === 'radius') root.innerHTML =
      '<div class="tool-field"><input type="range" class="at-in" min="0" max="40" value="12"><span class="at-val">12px</span></div>' +
      '<div class="at-box" style="width:160px;height:100px;background:#fca5a5;border:2px solid #ef4444;margin:16px auto"></div>' +
      '<pre class="tool-output at-out">border-radius: 12px;</pre>';
    else if (kind === 'shadow') root.innerHTML =
      '<div class="tool-field"><input type="range" class="at-in" min="0" max="40" value="10"><span class="at-val">10px</span></div>' +
      '<div class="at-box" style="width:160px;height:100px;background:#fff;border:1px solid #eee;margin:16px auto"></div>' +
      '<pre class="tool-output at-out">box-shadow: 0 10px 20px rgba(0,0,0,.2);</pre>';
    else root.innerHTML =
      '<div class="tool-field"><input type="range" class="at-in" min="0" max="360" value="200"><span class="at-val">200deg</span></div>' +
      '<div class="at-box" style="width:100%;height:120px;border-radius:8px;margin:16px auto"></div>' +
      '<pre class="tool-output at-out">background: linear-gradient(200deg, #f0653a, #f59f00);</pre>';
    root.querySelector('.at-in').oninput = function () {
      var v = +this.value; root.querySelector('.at-val').textContent = v + 'px';
      var box = root.querySelector('.at-box');
      if (kind === 'radius') { box.style.borderRadius = v + 'px'; root.querySelector('.at-out').textContent = 'border-radius: ' + v + 'px;'; }
      else if (kind === 'shadow') { box.style.boxShadow = '0 ' + v + 'px 20px rgba(0,0,0,.2)'; root.querySelector('.at-out').textContent = 'box-shadow: 0 ' + v + 'px 20px rgba(0,0,0,.2);'; }
      else { box.style.background = 'linear-gradient(' + v + 'deg, #f0653a, #f59f00)'; root.querySelector('.at-out').textContent = 'background: linear-gradient(' + v + 'deg, #f0653a, #f59f00);'; }
    };
  }
  function renderUrlParse(root) {
    root.innerHTML = '<div class="tool-field"><input class="tool-input at-in" value="https://portalaser.cn/tools/json-formatter?q=1#section"></div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Parse</button></div><pre class="tool-output at-out"></pre>';
    root.querySelector('.at-go').onclick = function () {
      try { var u = new URL(root.querySelector('.at-in').value);
        root.querySelector('.at-out').textContent = 'Protocol: ' + u.protocol + '\nHost: ' + u.host + '\nPath: ' + u.pathname + '\nQuery: ' + u.search + '\nHash: ' + u.hash;
      } catch (e) { root.querySelector('.at-out').textContent = 'Invalid URL'; }
    };
  }
  function renderFake(root) {
    root.innerHTML = '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Generate identity</button></div><pre class="tool-output at-out" style="text-align:center"></pre>';
    root.querySelector('.at-go').onclick = function () {
      var names = ['Alex Chen','Sam Wang','Jamie Li','Taylor Xu','Jordan Zhang'];
      root.querySelector('.at-out').textContent = 'Name: ' + pick(names) + '\nAge: ' + rnd(20, 50) + '\nEmail: user' + rnd(1000, 9999) + '@example.com\nPhone: 138' + String(rnd(10000000, 99999999));
    };
  }
  function renderMock(root) {
    root.innerHTML = '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Generate 10 rows</button></div><pre class="tool-output at-out"></pre>';
    root.querySelector('.at-go').onclick = function () {
      var rows = ['id,name,email']; for (var i = 1; i <= 10; i++) rows.push(i + ',user' + i + ',user' + i + '@example.com');
      root.querySelector('.at-out').textContent = rows.join('\n');
    };
  }
  function renderTeleprompter(root) {
    root.innerHTML = '<div class="tool-field"><textarea class="tool-textarea at-in" rows="3" placeholder="Script text…">Welcome to Portala. This is a teleprompter test.</textarea></div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Start scroll</button></div>' +
      '<div class="at-scr" style="height:120px;overflow:hidden;background:#000;color:#fff;font-size:1.4rem;line-height:1.6"><div class="at-out" style="padding:10px">Text</div></div>';
    var t = null;
    root.querySelector('.at-go').onclick = function () {
      if (t) { clearInterval(t); t = null; return; }
      root.querySelector('.at-out').textContent = root.querySelector('.at-in').value;
      var y = 0; t = setInterval(function () { y -= 1; root.querySelector('.at-out').style.transform = 'translateY(' + y + 'px)'; }, 30);
    };
  }
  function renderHabit(root) {
    root.innerHTML = '<ul class="at-list" style="list-style:none;padding:0"></ul><div class="tool-field"><input class="tool-input at-in" placeholder="New habit"><button class="tool-btn at-add">+</button></div>';
    var habits = JSON.parse(localStorage.getItem('portalaser-habits') || '["Drink water","Exercise"]');
    function paint() { root.querySelector('.at-list').innerHTML = habits.map(function (h, i) { return '<li style="padding:8px;border-bottom:1px solid #eee"><input type="checkbox" data-i="' + i + '" class="at-chk"> ' + h + '</li>'; }).join('');
      root.querySelectorAll('.at-chk').forEach(function (c) { c.onchange = function () { this.parentElement.style.textDecoration = this.checked ? 'line-through' : ''; }; });
    }
    paint();
    root.querySelector('.at-add').onclick = function () { var v = root.querySelector('.at-in').value.trim(); if (!v) return; habits.push(v); localStorage.setItem('portalaser-habits', JSON.stringify(habits)); root.querySelector('.at-in').value = ''; paint(); };
  }
  function renderVote(root) {
    root.innerHTML = '<div class="tool-field"><input class="tool-input at-in" placeholder="Option name"><button class="tool-btn at-add">+</button></div><div class="at-list"></div>';
    var opts = JSON.parse(localStorage.getItem('portalaser-vote') || '[]');
    function paint() { root.querySelector('.at-list').innerHTML = opts.map(function (o, i) { return '<div style="padding:8px;border-bottom:1px solid #eee">' + o.name + ' — ' + o.count + ' votes <button data-i="' + i + '" class="tool-btn at-v" style="float:right">Vote</button></div>'; }).join('');
      root.querySelectorAll('.at-v').forEach(function (b) { b.onclick = function () { opts[+this.dataset.i].count++; localStorage.setItem('portalaser-vote', JSON.stringify(opts)); paint(); }; });
    }
    paint();
    root.querySelector('.at-add').onclick = function () { var v = root.querySelector('.at-in').value.trim(); if (!v) return; opts.push({ name: v, count: 0 }); localStorage.setItem('portalaser-vote', JSON.stringify(opts)); root.querySelector('.at-in').value = ''; paint(); };
  }
  function renderCurl(root) {
    root.innerHTML = '<div class="tool-field"><label class="tool-label">curl command</label><textarea class="tool-textarea at-in" rows="3" placeholder="curl https://api.example.com"></textarea></div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Convert to fetch</button></div><pre class="tool-output at-out"></pre>';
    root.querySelector('.at-go').onclick = function () {
      var m = root.querySelector('.at-in').value.match(/curl\s+['"]?([^\s'"]+)/);
      root.querySelector('.at-out').textContent = m ? "fetch('" + m[1] + "')\n  .then(r => r.json())\n  .then(console.log);" : 'Could not parse curl URL';
    };
  }
  function renderDiff(root) {
    root.innerHTML = '<div class="tool-grid-2"><textarea class="tool-textarea at-a" rows="4" placeholder="Original"></textarea><textarea class="tool-textarea at-b" rows="4" placeholder="Modified"></textarea></div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Compare</button></div><pre class="tool-output at-out"></pre>';
    root.querySelector('.at-go').onclick = function () {
      var a = root.querySelector('.at-a').value.split('\n'), b = root.querySelector('.at-b').value.split('\n'), out = [];
      var n = Math.max(a.length, b.length);
      for (var i = 0; i < n; i++) { if (a[i] !== b[i]) out.push('- ' + (a[i]||'') + '\n+ ' + (b[i]||'')); }
      root.querySelector('.at-out').textContent = out.join('\n') || 'Identical';
    };
  }
  function renderHear(root) {
    root.innerHTML = '<div class="tool-field"><input class="tool-input at-in" type="number" value="440"><span>Hz</span></div>' +
      '<div class="tool-actions" style="justify-content:center"><button class="tool-btn at-go">Play</button></div>';
    root.querySelector('.at-go').onclick = function () {
      var ctx = new (window.AudioContext || window.webkitAudioContext()); var o = ctx.createOscillator(); var g = ctx.createGain();
      o.frequency.value = +root.querySelector('.at-in').value; o.connect(g); g.connect(ctx.destination); g.gain.value = 0.1; o.start(); setTimeout(function () { o.stop(); ctx.close(); }, 1000);
    };
  }
  function renderFilePick(root) {
    root.innerHTML = '<input type="file" class="at-f"><pre class="tool-output at-out"></pre>';
    root.querySelector('.at-f').onchange = function () {
      var f = this.files[0]; if (!f) return;
      root.querySelector('.at-out').textContent = 'Name: ' + f.name + '\nSize: ' + (f.size / 1024).toFixed(1) + ' KB\nType: ' + f.type + '\nLast modified: ' + new Date(f.lastModified).toLocaleDateString();
    };
  }
  function renderLookup2(root) {
    var T = {
      constellation: { '白羊':'3/21-4/19','金牛':'4/20-5/20','双子':'5/21-6/21','巨蟹':'6/22-7/22','狮子':'7/23-8/22','处女':'8/23-9/22','天秤':'9/23-10/23','天蝎':'10/24-11/22','射手':'11/23-12/21','摩羯':'12/22-1/19','水瓶':'1/20-2/18','双鱼':'2/19-3/20' },
      clothing: { 'S':'160/84A','M':'165/88A','L':'170/92A','XL':'175/96A','XXL':'180/100A' },
      food: { '苹果':'常温 1-2 周','香蕉':'常温 3-5 天','牛奶':'冷藏 3-7 天','鸡蛋':'冷藏 30 天','面包':'常温 3-5 天' },
      holiday: { '元旦':'1/1','春节':'农历正月初一','清明':'4/4-6','劳动节':'5/1','国庆':'10/1' },
      plate: { '京':'北京','沪':'上海','粤':'广东','苏':'江苏','浙':'浙江','川':'四川' },
      ext: { '.jpg':'图片','.pdf':'文档','.mp4':'视频','.zip':'压缩包','.txt':'文本','.exe':'可执行' }
    };
    var t = T[root.getAttribute('data-fn')] || T.constellation;
    root.innerHTML = '<div class="at-grid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px"></div>';
    var g = root.querySelector('.at-grid');
    Object.keys(t).forEach(function (k) { var d = document.createElement('div'); d.style.cssText = 'padding:8px;border:1px solid #e2e8f0;border-radius:6px;font-size:.9rem'; d.innerHTML = '<b>' + k + '</b> <span style="color:#64748b">' + t[k] + '</span>'; g.appendChild(d); });
  }

  var MAP = {
    transform: renderTransform, pick: renderPick, countdown: renderCountdown,
    clock: renderClock, stopwatch: renderStopwatch, 'color-cycle': renderColorCycle,
    keytest: renderKeyTest, mousetest: renderMouseTest, speaker: renderSpeaker,
    pomodoro: renderPomodoro,
    typing: renderTyping, schulte: renderSchulte, reaction: renderReaction, cps: renderCps,
    quiz: renderQuiz, led: renderLed, note: renderNote, todo: renderTodo, draw: renderDraw,
    tts: renderTts, noise: renderNoise, breath: renderBreath, symbols: renderSymbols,
    colorblind: renderColorBlind, pwstrength: renderPwStrength, lookup: renderLookup,
    template: renderTemplate,
    info: renderInfo, camera: renderCamera, mic: renderMic, gamepad: renderGamepad,
    touch: renderTouch, refresh: renderRefresh, speed: renderSpeed, hash: renderHash,
    cssp: renderCss, urlparse: renderUrlParse, fake: renderFake, mock: renderMock,
    teleprompter: renderTeleprompter, habit: renderHabit, vote: renderVote,
    curl: renderCurl, diff: renderDiff, hear: renderHear, filepick: renderFilePick,
    lookup2: renderLookup2
  };

  function init() {
    document.querySelectorAll('.auto-tool').forEach(function (root) {
      var t = root.getAttribute('data-tool');
      if (MAP[t]) MAP[t](root);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
