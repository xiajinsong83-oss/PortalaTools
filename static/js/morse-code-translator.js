/* Portala Tools — Morse Code Translator (ITU) */
(function () {
  'use strict';

  /* ---------- Pure functions ---------- */

  var MORSE = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
    '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
    ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
    '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
  };

  var REVERSE = {};
  Object.keys(MORSE).forEach(function (k) { REVERSE[MORSE[k]] = k; });

  function textToMorse(text) {
    var upper = String(text).toUpperCase();
    var words = upper.split(/\s+/).filter(function (w) { return w.length > 0; });
    return words.map(function (word) {
      return word.split('').map(function (ch) {
        return MORSE[ch] !== undefined ? MORSE[ch] : '';
      }).filter(function (c) { return c !== ''; }).join(' ');
    }).filter(function (w) { return w.length > 0; }).join(' / ');
  }

  function morseToText(morse) {
    var words = String(morse).split(' / ');
    return words.map(function (word) {
      return word.trim().split(/\s+/).map(function (code) {
        return REVERSE[code] !== undefined ? REVERSE[code] : '';
      }).join('');
    }).join(' ');
  }

  /* ---------- DOM wiring (browser only) ---------- */

  if (typeof document !== 'undefined') {
    PortalaTools.onReady(function () {
      var input = document.getElementById('morse-code-translator-input');
      var output = document.getElementById('morse-code-translator-output');
      var status = document.getElementById('morse-code-translator-status');
      if (!input || !output || !status) { return; }

      function toMorse() {
        output.textContent = textToMorse(input.value);
        PortalaTools.setStatus('morse-code-translator-status', 'Text converted to Morse.', false);
      }

      function toText() {
        output.textContent = morseToText(input.value);
        PortalaTools.setStatus('morse-code-translator-status', 'Morse converted to text.', false);
      }

      function copy() {
        if (!output.textContent) {
          PortalaTools.setStatus('morse-code-translator-status', 'Nothing to copy yet.', true);
          return;
        }
        PortalaTools.copyText(output.textContent, function () {
          PortalaTools.setStatus('morse-code-translator-status', 'Copied!', false);
        }, function () {
          PortalaTools.setStatus('morse-code-translator-status', 'Copy failed.', true);
        });
      }

      function example() {
        input.value = 'SOS';
        output.textContent = '';
        PortalaTools.setStatus('morse-code-translator-status', 'Sample loaded. Try Text to Morse.', false);
      }

      function clearAll() {
        input.value = ''; output.textContent = '';
        PortalaTools.setStatus('morse-code-translator-status', '', false);
      }

      var btn = function (id, fn) {
        var el = document.getElementById(id);
        if (el) { el.addEventListener('click', fn); }
      };
      btn('morse-code-translator-btn-to-morse', toMorse);
      btn('morse-code-translator-btn-to-text', toText);
      btn('morse-code-translator-btn-copy', copy);
      btn('morse-code-translator-btn-example', example);
      btn('morse-code-translator-btn-clear', clearAll);
    });
  }

  /* ---------- Node test exports ---------- */

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { textToMorse: textToMorse, morseToText: morseToText };
  }
})();
