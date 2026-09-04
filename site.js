/* Sole Sacraty - shared behaviour. No inline handlers anywhere. */
(function () {
  'use strict';

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burgerBtn');
  var navLinks = document.getElementById('navLinks');

  function setBurger(open) {
    if (!burger) return;
    var use = burger.querySelector('use');
    if (use) use.setAttribute('href', open ? '#i-s-xmark' : '#i-s-bars');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      setBurger(open);
    });
    navLinks.querySelectorAll('a:not(#servicesToggle)').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        setBurger(false);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        setBurger(false);
        burger.focus();
      }
    });
  }

  /* ---------- services dropdown (tap to open on mobile) ---------- */
  var servicesToggle = document.getElementById('servicesToggle');
  var servicesDrop = document.getElementById('servicesDrop');
  if (servicesToggle && servicesDrop) {
    servicesToggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        var open = servicesDrop.classList.toggle('open');
        servicesToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    });
  }

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.rv');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- analytics: declarative events via data-ev ---------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-ev]') : null;
    if (!el || typeof window.gtag !== 'function') return;
    var name = el.getAttribute('data-ev');
    var item = el.getAttribute('data-ev-item');
    var value = el.getAttribute('data-ev-value');
    var payload = { currency: 'ZAR' };
    if (value) payload.value = Number(value);
    if (item) payload.items = [{ item_name: item }];
    try { window.gtag('event', name, payload); } catch (err) { /* never block the click */ }
  }, true);

  /* ---------- auto-track WhatsApp / tel / mailto clicks ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a || a.hasAttribute('data-ev') || typeof window.gtag !== 'function') return;
    var href = a.getAttribute('href') || '';
    var kind = href.indexOf('wa.me') > -1 ? 'whatsapp_click'
             : href.indexOf('tel:') === 0 ? 'phone_click'
             : href.indexOf('mailto:') === 0 ? 'email_click' : null;
    if (!kind) return;
    try {
      window.gtag('event', kind, { link_url: href, page_path: location.pathname });
    } catch (err) { /* no-op */ }
  }, true);
})();
