const passwordInput = document.getElementById("password-input");
const passwordInput2 = document.getElementById("password-input2");
const usernameInput = document.getElementById("nombre");
const emailInput = document.getElementById("correo");
const passwordValidation = document.getElementById("password-validation");
const submitButton = document.getElementById("submit-button");
const formLogin = document.querySelector(".form-login");
const checkBox = document.getElementById("mostrar-password");
const label = document.getElementById("label2");
let typingTimer;
const doneTypingInterval = 500; // Intervalo de espera después de que el usuario haya terminado de escribir (en milisegundos)

// Función para ajustar el estilo del formulario
function ajustarEstiloFormulario() {
  formLogin.style.height = `calc(100% + 20px)`;
  formLogin.style.marginTop = "-20px";
}
function ajustarEstiloFormulario2() {
  formLogin.style.height = `calc(100% + 80px)`;
  formLogin.style.marginTop = "-60px";
}

function ajustarEstiloLabel() {
  label.style.marginTop = "-50px";
}

// Función para validar el nombre de usuario
function validarNombre(username) {
  const tieneCaracteresEspeciales =
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(username);
  const mensajes = [];

  if (!tieneCaracteresEspeciales) {
    mensajes.push("✔️ El nombre de usuario es correcto.");
  } else {
    mensajes.push("❌ El nombre de usuario tiene caracteres especiales.");
  }
  ajustarEstiloFormulario();
  return mensajes;
}

// Función para validar el correo electrónico
function validarCorreo(email) {
  const tieneFormatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const mensajes = [];

  if (tieneFormatoValido) {
    mensajes.push("✔️ El correo es correcto.");
  } else {
    mensajes.push("❌ El correo no es correcto.");
  }
  ajustarEstiloFormulario();
  return mensajes;
}

// Función para validar la contraseña
function validarContrasena(contrasena) {
  const tieneLongitudValida = contrasena.length >= 8 && contrasena.length <= 20;
  const tieneMayuscula = /[A-Z]/.test(contrasena);
  const tieneMinuscula = /[a-z]/.test(contrasena);
  const tieneNumero = /\d/.test(contrasena);
  const tieneEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
    contrasena
  );

  const mensajes = [];

  if (tieneLongitudValida) {
    mensajes.push("✔️ Cumple con la longitud requerida.");
  } else {
    mensajes.push("❌ Debe tener entre 8 y 20 caracteres.");
  }

  if (tieneMayuscula) {
    mensajes.push("✔️ Contiene al menos una mayúscula.");
  } else {
    mensajes.push("❌ Debe contener al menos una mayúscula.");
  }

  if (tieneMinuscula) {
    mensajes.push("✔️ Contiene al menos una minúscula.");
  } else {
    mensajes.push("❌ Debe contener al menos una minúscula.");
  }

  if (tieneNumero) {
    mensajes.push("✔️ Contiene al menos un número.");
  } else {
    mensajes.push("❌ Debe contener al menos un número.");
  }

  if (tieneEspecial) {
    mensajes.push("✔️ Contiene al menos un carácter especial.");
  } else {
    mensajes.push("❌ Debe contener un carácter especial.");
  }
  ajustarEstiloFormulario2();
  return mensajes;
}

// Función para validar las contraseñas coincidentes
function validarContraseñas() {
  const contrasena1 = passwordInput.value;
  const contrasena2 = passwordInput2.value;
  const mensajes = [];

  if (contrasena1 !== contrasena2) {
    mensajes.push("❌ Las contraseñas no coinciden.");
  }

  return mensajes;
}

// Función para mostrar y gestionar las validaciones
function mostrarValidaciones(validaciones) {
  passwordValidation.innerHTML = "";

  validaciones.forEach((mensaje) => {
    const span = document.createElement("span");
    if (mensaje.includes("✔️")) {
      span.style.color = "green";
    } else {
      span.style.color = "red";
    }
    span.innerHTML = `${mensaje}<br>`;
    passwordValidation.appendChild(span);
  });

  submitButton.disabled = validaciones.some(
    (mensaje) => !mensaje.includes("✔️")
  );
}

// Eventos de escucha para activar las validaciones cuando se escribe en los campos
usernameInput.addEventListener("input", function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function () {
    const username = usernameInput.value;
    const mensajesNombre = validarNombre(username);
    mostrarValidaciones(mensajesNombre);
  }, doneTypingInterval);
});

emailInput.addEventListener("input", function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function () {
    const email = emailInput.value;
    const mensajesCorreo = validarCorreo(email);
    mostrarValidaciones(mensajesCorreo);
  }, doneTypingInterval);
});

// Función para validar contraseñas al escribir en cualquier campo de contraseña
function validarContrasenasOnInput() {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function () {
    const contrasena1 = passwordInput.value;
    const contrasena2 = passwordInput2.value;

    // Validar cada campo de contraseña por separado
    const mensajesContrasena1 = validarContrasena(contrasena1);
    const mensajesContrasena2 = validarContrasena(contrasena2);

    // Verificar si hay algún mensaje de validación en rojo en la primera validación
    const hayRojoContrasena1 = mensajesContrasena1.some((mensaje) =>
      mensaje.includes("❌")
    );
    // Verificar si hay algún mensaje de validación en verde en la segunda validación
    const hayVerdeContrasena2 = mensajesContrasena2.some((mensaje) =>
      mensaje.includes("✔️")
    );

    // Determinar qué mensajes mostrar basados en las condiciones
    let mensajesMostrar = [];
    if (passwordInput === document.activeElement) {
      mensajesMostrar = mensajesContrasena1;
    } else if (passwordInput2 === document.activeElement) {
      mensajesMostrar = mensajesContrasena2;
    }

    // Validar si las contraseñas coinciden y actualizar los mensajes
    if (contrasena1 === contrasena2) {
      mensajesMostrar.push("✔️ Las contraseñas coinciden.");
    } else {
      mensajesMostrar.push("❌ Las contraseñas no coinciden.");
    }

    // Si las contraseñas coinciden, borrar el mensaje de coincidencia
    if (contrasena1 === contrasena2) {
      mensajesMostrar = mensajesMostrar.filter(
        (mensaje) => !mensaje.includes("Las contraseñas coinciden")
      );
    }

    mostrarValidaciones(mensajesMostrar);
  }, doneTypingInterval);
}

passwordInput.addEventListener("input", validarContrasenasOnInput);
passwordInput2.addEventListener("input", validarContrasenasOnInput);

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  validarEnviarFormulario();
});

// Resto del código permanece igual
function mostrarContrasena() {
  var checkboxMostrar = document.getElementById("mostrar-password");

  if (checkboxMostrar.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function mostrarContrasena2() {
  var checkboxMostrar2 = document.getElementById("mostrar-password2");

  if (checkboxMostrar2.checked) {
    passwordInput2.type = "text";
  } else {
    passwordInput2.type = "password";
  }
}
