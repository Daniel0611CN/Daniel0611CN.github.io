document
  .getElementById("submit-button")
  .addEventListener("click", function values(event) {
    event.preventDefault();
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usuarioRegex = /^[a-zA-Z0-9_]{3,16}$/;
    const usuario = document.querySelector('input[name="usuario"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const contrasena = document.querySelector('input[name="contrasena"]').value;

    if (
      usuario.trim() === "" ||
      !usuarioRegex.test(usuario) ||
      correo.trim() === "" ||
      !correoRegex.test(correo) ||
      contrasena.trim() === ""
    ) {
      Swal.fire({
        allowOutsideClick: false,
        title: "Error",
        text: "Por favor, complete todos los campos.",
        icon: "error",
      });
    } else {
      const datosRegistro = {
        usuario: usuario,
        correo: correo,
        contrasena: contrasena,
      };
      const JsonRegistro = JSON.stringify(datosRegistro);
      Swal.fire({
        allowOutsideClick: false,
        title: "Términos y condiciones",
        input: "checkbox",
        inputValue: 1,
        text: `
                Estoy de acuerdo con los términos y condiciones
            `,
        confirmButtonText: `
                Continuar&nbsp;<i class="fa fa-arrow-right"></i>
            `,
        inputValidator: (result) => {
          return !result && "Debes estar de acuerdo con los términos";
        },
      }).then(() => {
        Swal.fire({
          allowOutsideClick: false,
          title: "Bienvenido a Cedago",
          text: "¡Muchas gracias por registrarte!",
          icon: "success",
          text: JsonRegistro,
        }).then((result) => {
          if (result.value) {
            window.location.href = "../inicio.html";
          }
        });
      });
    }
  });
