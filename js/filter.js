const filterBox = document.querySelectorAll(".gallery__item");
document.querySelector(".filter").addEventListener("click", (e) => {
  if (e.target.tagName !== "INPUT") return false;
  let filterClass = e.target.dataset["f"];
  filterBox.forEach((elem) => {
    elem.classList.remove("hide");
    if (elem.classList.contains(filterClass)) {
      elem.classList.remove("hide");
    } else {
      elem.classList.add("hide");
    }
  });
});
