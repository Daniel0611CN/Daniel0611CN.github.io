document
  .getElementById("submit-button")
  .addEventListener("click", function values(event) {
    event.preventDefault();
    const usuario = document.querySelector('input[name="usuario"]').value;
    const contrasena = document.querySelector('input[name="contrasena"]').value;
    if (usuario.trim() === "" || contrasena.trim() === "") {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos.",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Muchas gracias por entrar a Cedago",
        text: "¡Esperamos que disfrutes la experiencia!",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "../inicio.html";
        }
      });
    }
  });
