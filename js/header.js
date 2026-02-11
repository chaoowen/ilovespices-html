const mobileToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');

// Toggle mobile menu
mobileToggle.addEventListener('click', function () {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';

  mobileMenu.classList.toggle('active');
  this.classList.toggle('active');
  this.setAttribute('aria-expanded', !isExpanded);

  // Toggle body scroll
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu via back arrow / menu-header
document.querySelector('.menu-header').addEventListener('click', function () {
  mobileMenu.classList.remove('active');
  mobileToggle.classList.remove('active');
  mobileToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
});

// Submenu toggle for items with .has-submenu
document.querySelectorAll('.menu-item.has-submenu > .menu-link').forEach(link => {
  link.addEventListener('click', function () {
    const menuItem = this.parentElement;
    const icon = this.querySelector('.menu-toggle-icon');
    const isExpanded = menuItem.classList.contains('expanded');

    menuItem.classList.toggle('expanded');

    // Switch icon
    if (icon) {
      icon.src = isExpanded
        ? '../images/icons/chevron-down.svg'
        : '../images/icons/minus.svg';
    }
  });
});

// Active Navigation Link
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.header__nav-link');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
  }

  lastScroll = currentScroll;
});
