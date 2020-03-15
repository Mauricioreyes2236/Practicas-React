import React from 'react';
import '../assets/style/components/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Carrusel from '../components/Carrusel';
import AppItem from '../container/AppItem';



const App = () => (
    <div className="App">
        <Header/>
        <Search/>
        <Carrusel/>
        <AppItem/>
        <Footer/>
        
    </div>
);
export default App;
