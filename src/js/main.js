const refsMenu = {
  openMenuBtn: document.querySelector('.js-menu-open'),
  closeMenuBtn: document.querySelector('.js-menu-close'),
  overlayMenu: document.querySelector('.js-menu'),
};

const toggleMenu = () => {
  const isMenuOpen =
    refsMenu.openMenuBtn.getAttribute('aria-expanded') === 'true';

  refsMenu.openMenuBtn.setAttribute('aria-expanded', String(!isMenuOpen));
  refsMenu.overlayMenu.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll', !isMenuOpen);
};

refsMenu.openMenuBtn?.addEventListener('click', toggleMenu);
refsMenu.closeMenuBtn?.addEventListener('click', toggleMenu);

window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
  if (!e.matches) return;
  refsMenu.overlayMenu.classList.remove('is-open');
  refsMenu.openMenuBtn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
});
