/* =========================================================
   The Bread House — main.js
   All site-wide and page-specific JavaScript lives here.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------
     MOBILE NAVIGATION — hamburger toggle (all pages)
  --------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
  }

  /* ---------------------------------------------------------
     PRODUCTS PAGE — tab switching
  --------------------------------------------------------- */
  const tabs = document.querySelectorAll('.tab-btn');

  if (tabs.length > 0) {
    const sections = {
      breads:   document.getElementById('breads'),
      sweets:   document.getElementById('sweets'),
      catering: document.getElementById('catering'),
    };

    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');

        // Show matching section, hide others
        const target = btn.dataset.target;
        Object.entries(sections).forEach(([key, el]) => {
          if (el) el.style.display = key === target ? 'block' : 'none';
        });

        // Smooth-scroll to the tabs bar
        document.querySelector('.products-tabs')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

});
