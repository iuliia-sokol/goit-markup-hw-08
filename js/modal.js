const modalWindow = document.querySelector(".modal-window");
document.addEventListener("click", (e) => {
  const closeModal = e.composedPath().includes(modalWindow);
  if (!closeModal) {
    modalWindow.classList.add("is-hidden");
  }
});

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
