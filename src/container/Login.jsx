import React from 'react';
import '../assets/style/components/Login.scss';
import google from '../assets/static/google-icon.png';
import twitter from '../assets/static/twitter-icon.png';

const Login = () => {
    return(
        <div className="Login">
        <section class="login">
    <section class="login__container">
      <h2>Inicia sesión</h2>
      <form class="login__container--form">
        <input class="input" type="text" placeholder="Correo"></input>
        <input class="input" type="password" placeholder="Contraseña"></input>
        <button class="button">Iniciar sesión</button>
        <div class="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section class="login__container--social-media">
        <div><img  src={google} /> Inicia sesión con Google</div>
        <div><img  src={twitter} />Inicia sesión con twitter</div>
      </section>
      <p class="login__container--register">No tienes ninguna cuenta <a href="">Regístrate</a></p>
    </section>
  </section>
        </div>
    ) 
}
export default Login;
