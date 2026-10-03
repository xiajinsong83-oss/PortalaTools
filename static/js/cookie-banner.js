/* portalaser.cn — cookie consent (GDPR/CCPA friendly, no tracking) */
(function () {
  'use strict';

  var KEY = 'portalaser_cookie_consent';
  var banner = document.getElementById('cookie-banner');
  var btn = document.getElementById('cookie-accept');

  if (!banner || !btn) {
    return;
  }

  // Respect a previously recorded choice. No tracking cookies are set by us.
  try {
    if (localStorage.getItem(KEY) === 'accepted') {
      return;
    }
  } catch (e) {
    /* storage unavailable: show the banner anyway */
  }

  banner.hidden = false;

  btn.addEventListener('click', function () {
    try {
      localStorage.setItem(KEY, 'accepted');
    } catch (e) {
      /* storage unavailable: just hide */
    }
    banner.hidden = true;
  });
})();
