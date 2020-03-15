import React from 'react';
import '../assets/style/components/header.scss';

import imagen from '../assets/static/t.png';

import icono from '../assets/static/user-icon.png';

const Header = () => {
    return(
        <div className="header">
  <header class="header">
    <img className="header__img" src={imagen} alt="Platzi Video"></img>
    <div className="header__menu">
      <div class="header__menu--profile">
        <img src={icono} alt=""></img>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
        </div>
    ); 
}
export default Header;