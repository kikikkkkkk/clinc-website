/* Mobile menu and FAQ accordion. No dependencies — safe to run fully offline. */
(function () {
  'use strict';

  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName !== 'A') return;
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  }

  // Only one FAQ open at a time
  var faqs = document.querySelectorAll('.asks details');
  Array.prototype.forEach.call(faqs, function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      Array.prototype.forEach.call(faqs, function (o) { if (o !== d) o.open = false; });
    });
  });
})();
