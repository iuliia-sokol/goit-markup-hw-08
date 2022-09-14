const openModalBtn = document.querySelector(".hero__btn");
const closeModalBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");
const modalWindow = document.querySelector(".modal-window");
const modalForm = document.querySelector(".call-form");

openModalBtn.addEventListener("click", function () {
  modal.classList.remove("is-hidden");
});

closeModalBtn.addEventListener("click", function () {
  modal.classList.toggle("is-hidden");
  modalForm.reset();
});

modal.addEventListener("click", (e) => {
  const closeModal = e.composedPath().includes(modalWindow);
  if (!closeModal) {
    modal.classList.add("is-hidden");
    modalForm.reset();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("is-hidden");
    modalForm.reset();
  }
});
