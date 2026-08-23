/* Sidebar drawer on narrow screens, and current-section highlighting in the
   sidebar nav. No dependencies — safe to run fully offline. */
(function () {
  'use strict';

  // Sidebar drawer (mobile only — on desktop .side-body is always visible)
  var burger = document.getElementById('burger');
  var body = document.getElementById('sideBody');
  if (burger && body) {
    burger.addEventListener('click', function () {
      var open = body.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    body.addEventListener('click', function (e) {
      if (e.target.tagName !== 'A') return;
      body.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  }

  // Mark the section currently in view in the sidebar nav
  var links = document.querySelectorAll('.side-nav a');
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  var targets = [];
  Array.prototype.forEach.call(links, function (a) {
    var el = document.querySelector(a.getAttribute('href'));
    if (!el) return;
    byId[el.id] = a;
    targets.push(el);
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var a = byId[entry.target.id];
      if (a) a.classList.toggle('here', entry.isIntersecting);
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  targets.forEach(function (el) { io.observe(el); });
})();
