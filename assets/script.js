const passwordInputs = document.querySelectorAll("input[type='password']");
const errorSpan = document.querySelector("span.error");

function chechIfPasswordsMatch() {
  if(passwordInputs[0].value.length < 8) {
    passwordInputs.forEach(input => input.classList.add("error"));
    errorSpan.textContent = "Password must be at least 8 characters long";
  }
  else if(passwordInputs[0].value === passwordInputs[1].value) {
    passwordInputs.forEach(input => input.classList.remove("error"));
    errorSpan.textContent = "";
  } else {
    passwordInputs.forEach(input => input.classList.add("error"));
    errorSpan.textContent = "Passwords do not match";
  }
}

window.addEventListener("load", chechIfPasswordsMatch);
passwordInputs.forEach(input => input.addEventListener("input", chechIfPasswordsMatch));