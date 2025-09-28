// Basic interactivity: mobile nav, active year, back-to-top, smooth close on link click
const navToggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('site-menu');
const yearSpan = document.getElementById('year');
const toTopBtn = document.getElementById('toTop');

yearSpan.textContent = new Date().getFullYear().toString();

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.site-nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Back-to-top button visibility
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    toTopBtn.classList.add('show');
  } else {
    toTopBtn.classList.remove('show');
  }
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
