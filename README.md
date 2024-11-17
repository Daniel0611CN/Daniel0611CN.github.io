<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cedago - Página de Ciberseguridad</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            max-width: 800px;
            margin: 20px;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1, h2 {
            color: #2c3e50;
            text-align: center;
        }

        h1 {
            font-size: 2em;
            margin-bottom: 0.2em;
        }

        h2 {
            font-size: 1.5em;
            margin-top: 1em;
            margin-bottom: 0.5em;
        }

        p, li {
            font-size: 1em;
            margin: 0.5em 0;
            color: #555;
        }

        a {
            color: #3498db;
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            color: #2980b9;
        }

        ul {
            list-style-type: disc;
            padding-left: 20px;
        }

        .section {
            margin-top: 20px;
            padding: 10px;
            background-color: #ecf0f1;
            border-radius: 5px;
        }

        .section-title {
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 5px;
        }

        .contact {
            font-style: italic;
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Cedago - Página de Ciberseguridad</h1>
        <p><strong>Autor:</strong> Daniel Clavijo Núñez</p>
        <p><strong>Enlace a la web:</strong> <a href="https://daniel0611CN.github.io">https://daniel0611CN.github.io</a> | <a href="#">Visita en Vercel</a></p>

        <div class="section">
            <h2 class="section-title">Acerca de Cedago</h2>
            <p>
                Cedago es una página web desarrollada como parte del primer curso del Grado Superior en Desarrollo de Aplicaciones Web, en la materia de Lenguaje de Marcas. Esta plataforma está orientada a ofrecer servicios de ciberseguridad y ha sido creada desde cero utilizando HTML, CSS y JavaScript.
            </p>
        </div>

        <div class="section">
            <h2 class="section-title">Contenido del Repositorio</h2>
            <ul>
                <li><strong>index.html</strong>: Contiene la estructura principal de la página de inicio.</li>
                <li><strong>Carpeta HTML</strong>: Incluye el resto de las páginas del sitio web.</li>
                <li><strong>Carpeta CSS</strong>: Contiene todas las hojas de estilo.</li>
                <li><strong>Carpeta JS</strong>: Contiene scripts para mejoras estéticas y funcionalidades de la web.</li>
                <li><strong>Carpeta images</strong>: Almacena la mayoría de las imágenes en formato webp.</li>
            </ul>
        </div>

        <div class="section">
            <h2 class="section-title">Funcionalidades Adicionales</h2>
            <p>
                Cedago incluye una página de registro e inicio de sesión para usuarios, con validación de nombre, correo electrónico y contraseña. Esta función permite ver la contraseña al hacer clic en el icono correspondiente. Tras iniciar sesión, se da la bienvenida al usuario en una página dedicada (<strong>inicio.html</strong>), que replica el contenido principal e incluye un saludo personalizado.
            </p>
        </div>

        <p class="contact">Para más información, puedes contactar a través del correo: <a href="mailto:daniclavijonunez@gmail.com">daniclavijonunez@gmail.com</a></p>
    </div>
</body>
</html>
