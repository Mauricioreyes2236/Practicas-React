import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import * as serviceWorker from "./serviceWorker";
//import HolaMundo from './components/Holamundo';
//import Stateful from './components/Stateful';

//import Button from './components/Button';

//import Header from '../src/components/Header';

//import Footer from '../src/components/Footer';

//import Carrusel from './components/Carrusel';

//import Layout from './container/Layout';

//import App from './container/App';

//import Search from '../src/components/Search';

//import Search from "../src/components/Login";
import Login1 from "./container/Login";
//import Login from "../src/container/App";

//import Stateless from './components/Stateless';

//ReactDOM.render(<Header />, document.getElementById ('root') );

//ReactDOM.render(<Footer />, document.getElementById ('root') );

//ReactDOM.render(<Carrusel />, document.getElementById ('root') );

//ReactDOM.render(<App />, document.getElementById ('root') );

//ReactDOM.render(<Layout />, document.getElementById ('root') );

//ReactDOM.render(<Search />, document.getElementById ('root') );

ReactDOM.render(<Login />, document.getElementById("root"));

//ReactDOM.render(<HolaMundo />, document.getElementById ('root') );

//ReactDOM.render(<Stateful />, document.getElementById ('root') );

//ReactDOM.render(<Stateless />, document.getElementById ('root') );

//ReactDOM.render(<Button text="Guardar" />, document.getElementById ('root') );

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
