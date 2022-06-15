(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const openBackdropTel = document.querySelector('.backdrop-tel');
const openModalTel = document.querySelector('.tel-modal--open');
console.log(openModalTel);
openModalTel.addEventListener('click', function () {
  openBackdropTel.classList.toggle('is-hidden');
});
