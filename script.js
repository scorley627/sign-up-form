document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

function handleDOMContentLoaded() {
  const phoneField = document.querySelector("input[type='tel']");
  phoneField.addEventListener("input", handlePhoneFieldInput);
}

function handlePhoneFieldInput(event) {
  const phoneChars = /^[0-9+\- ]*$/;
  if (!phoneChars.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^0-9+\- ]/, "");
  }

  if (event.target.validity.patternMismatch) {
    event.target.setCustomValidity("Please enter a valid phone number.");
  } else {
    event.target.setCustomValidity("");
  }
}
