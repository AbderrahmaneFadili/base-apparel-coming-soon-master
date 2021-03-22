const form = document.querySelector(".coming-soon__form");
const input = document.querySelector("input");
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");

const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//form submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!emailExpression.test(input.value)) {
    errorIcon.classList.add("error");
    errorText.classList.add("error");
    input.classList.add("error");
  } else {
    errorIcon.classList.remove("error");
    errorText.classList.remove("error");
    input.classList.remove("error");
  }
});
