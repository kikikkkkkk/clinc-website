/* Sticky nav state, mobile drawer, FAQ accordion.
   No dependencies — safe to run fully offline. */
(function () {
  'use strict';

  // Mobile drawer
  var burger = document.getElementById('burger');
  var drawer = document.getElementById('navLinks');
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        drawer.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Close any open FAQ item when another is opened
  var faqs = document.querySelectorAll('#faq details');
  Array.prototype.forEach.call(faqs, function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      Array.prototype.forEach.call(faqs, function (other) {
        if (other !== d) other.open = false;
      });
    });
  });
})();
