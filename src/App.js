import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo <code>Fernando Bonifacio Morales</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            learn react
        </a>
      </header>
    </div>
  );
}


export default App;/*
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default App;
*/