const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const emailInput = document.querySelector(".coming-soon-section__input");

const form = document.querySelector("form");

const erroText = document.querySelector(
  ".coming-soon-section__form-error-text",
);

const formControl = document.querySelector(".coming-soon-section__control");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailValidation.test(emailInput.value)) {
    formControl.classList.add("error");
  } else {
    formControl.classList.remove("error");
  }
});
