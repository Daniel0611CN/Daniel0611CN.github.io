const passwordInput = document.getElementById("password-input");
function mostrarContrasena() {
  var checkboxMostrar = document.getElementById("showPassword");

  if (checkboxMostrar.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
