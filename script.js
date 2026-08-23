/* Mobile nav, and current-section marking in the top bar.
   No dependencies — safe to run fully offline. */
(function () {
  'use strict';

  var burger = document.getElementById('burger');
  var nav = document.getElementById('barNav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName !== 'A') return;
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  }

  var links = document.querySelectorAll('.bar-nav a');
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
