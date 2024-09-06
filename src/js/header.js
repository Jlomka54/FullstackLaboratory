document.addEventListener('DOMContentLoaded', function () {
  const modalHeader = document.querySelector('.modal-header');
  const modalBtnClose = document.querySelector('.modal-btn-close');
  const btnMenu = document.querySelector('.header-icon-burger');
  const menuLinks = document.querySelectorAll('.menu-list a');
  const btnMenuTablet = document.querySelector('.btn-menu-tablet');
  const btnMenuModal = document.querySelector('.btn-menu');
  const menuCenterOpen = document.querySelector('.menu-center-open');
  const menuCenterList = document.querySelector('.menu-center-list');

  function openModal() {
    modalHeader.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modalBtnClose.style.display = 'flex';
  }

  function closeModal() {
    modalHeader.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  modalBtnClose.addEventListener('click', closeModal);
  btnMenu.addEventListener('click', openModal);
  btnMenuTablet.addEventListener('click', closeModal);
  btnMenuModal.addEventListener('click', closeModal);
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeModal();
    });
  });

  const menuCenterItems = document.querySelectorAll('.menu-center-item a');
  menuCenterItems.forEach(function (link) {
    link.addEventListener('click', function (event) {
      menuCenterList.classList.remove('is-open');
    });
  });
  menuCenterOpen.addEventListener('click', function () {
    menuCenterList.classList.toggle('is-open');
  });
});
