(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mob__btn-open'),
    closeMenuBtn: document.querySelector('.mob__btn-close'),
    menu: document.querySelector('.mob'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
