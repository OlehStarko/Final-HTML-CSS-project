(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.right = 0;
    document.body.style.left = 0;
    document.body.style.position = 'fixed';
  }
  function closeModal() {
    refs.modal.classList.toggle('is-hidden');
    const scrollY = document.body.style.top;
    document.body.style.position = 'static';
    window.scrollTo(0, parseInt(scrollY) * -1);
  }
})();

const openBackdropTel = document.querySelector('.backdrop-tel');
const openModalTel = document.querySelector('.tel-modal--open');
console.log(openModalTel);
openModalTel.addEventListener('click', function () {
  openBackdropTel.classList.toggle('is-hidden');
});
