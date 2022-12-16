const buttonOne = document.querySelector(".input-group.style-1 button");
const inputOne = document.querySelector(".input-group.style-1 input");

buttonOne.addEventListener("click", () => {
  inputOne.classList.toggle("active");
  buttonOne.classList.toggle("active");
});