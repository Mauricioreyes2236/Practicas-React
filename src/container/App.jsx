import React from "react";

import "../assets/style/components/App.scss";
import "../assets/style/components/header.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";

import Carrusel1 from "../components/Carrusel1";
import CarruselItem from "../components/CarruselItem";
import Categories from "../components/Categories";

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories>
      <Carrusel1>
        <CarruselItem></CarruselItem>
      </Carrusel1>
    </Categories>
    <Footer />
  </div>
);
export default App;
