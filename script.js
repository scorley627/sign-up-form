document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

function handleDOMContentLoaded() {
  const phoneField = document.getElementById("phone");
  phoneField.addEventListener("input", handleInput);

  const confirmPasswordField = document.getElementById("password_confirm");
  confirmPasswordField.addEventListener("input", handleInput);
}

function handleInput(event) {
  const field = event.target;
  const isPhoneField = field.getAttribute("type") == "tel";
  const isConfirmPasswordField = field.getAttribute("type") == "password";

  if (isPhoneField) {
    handlePhoneInput(field);
  } else if (isConfirmPasswordField) {
    handleConfirmPasswordInput(field);
  }
}

function handlePhoneInput(phoneField) {
  const phoneChars = /^[0-9+\- ]*$/;
  if (!phoneChars.test(phoneField.value)) {
    phoneField.value = phoneField.value.replace(/[^0-9+\- ]/g, "");
  }

  if (phoneField.validity.patternMismatch) {
    phoneField.setCustomValidity("Please enter a valid phone number.");
  } else {
    phoneField.setCustomValidity("");
  }
}

function handleConfirmPasswordInput(confirmPasswordField) {
  const passwordField = document.getElementById("password");
  if (passwordField.value != confirmPasswordField.value) {
    confirmPasswordField.setCustomValidity("Password does not match.");
  } else {
    confirmPasswordField.setCustomValidity("");
  }
}
