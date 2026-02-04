const mobileToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');

mobileToggle.addEventListener('click', function () {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';

  // Toggle menu
  mainNav.classList.toggle('active');
  this.classList.toggle('active');

  // Update ARIA attributes
  this.setAttribute('aria-expanded', !isExpanded);
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

// Header scroll effect (optional)
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

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
  const isClickInsideNav = mainNav.contains(event.target);
  const isClickOnToggle = mobileToggle.contains(event.target);

  if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
    mainNav.classList.remove('active');
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
  }
});

// Prevent body scroll when mobile menu is open (optional)
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.attributeName === 'class') {
      if (mainNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  });
});
observer.observe(mainNav, { attributes: true });