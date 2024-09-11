const menuToggle = document.querySelector('.js-dropdown-toggle');
const menuDropdown = document.querySelector('.js-dropdown-menu');
const menuLink = document.querySelectorAll('.js-header-menu-link');
const TRIGGER_HEIGHT = 100;

menuToggle.addEventListener('click', function () {
  menuDropdown.classList.toggle('show');
});

menuLink.forEach(link => {
  link.addEventListener('click', function () {
    menuDropdown.classList.remove('show');
  });
});

window.addEventListener('click', function (e) {
  if (!document.querySelector('.header-dropdown').contains(e.target)) {
    menuDropdown.classList.remove('show');
  }
});

// modal & scroll to top btn

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink = document.querySelectorAll('.js-header-link');
  const topScrollBtn = document.querySelector('.scroll-to-top');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (!isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.body.classList.remove('no-scroll');
  });

  const scrollEvent = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const btnVanishing = () => {
    const scrollYOffset = window.scrollY;

    if (scrollYOffset > TRIGGER_HEIGHT) {
      topScrollBtn.classList.add('up-btn-show');
      topScrollBtn.addEventListener('click', scrollEvent);
    } else {
      topScrollBtn.classList.remove('up-btn-show');
      topScrollBtn.removeEventListener('click', scrollEvent);
    }
  };

  window.addEventListener('scroll', btnVanishing);
})();
