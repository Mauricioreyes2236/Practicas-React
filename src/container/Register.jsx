import React from "react";
import imagen from "../assets/static/google-icon.png";
import "../assets/style/Register.scss";

const Register = () => (
  <body>
    <header className="header">
      <img class="header__img" src={imagen} alt="" width="150" />
    </header>
    <section class="register">
      <section class="register__container">
        <h2>Regístrate</h2>
        <form class="register__container--form">
          <input class="input" type="text" placeholder="Nombre" />
          <input class="input" type="text" placeholder="Correo" />
          <input class="input" type="password" placeholder="Contraseña" />
          <button class="button">Registrarme</button>
        </form>
        <a href="">Iniciar sesión</a>
      </section>
    </section>
    <footer class="footer">
      <a href="/">Terminos de uso</a>
      <a href="/">Declaración de privacidad</a>
      <a href="/">Centro de ayuda</a>
    </footer>
  </body>
);

export default Register;
