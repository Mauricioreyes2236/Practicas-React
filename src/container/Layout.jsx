import React from 'react';
import '../assets/style/components/Layout.scss';
import Vacaciones from '../components/Vacaciones';
import FBM from '../components/FBM';
import ClaseDigital from '../components/ClaseDigital';




const Layout = () => (
    <body>
    <div className="App">
        <FBM/>
        <Vacaciones/>
        <ClaseDigital/>
    </div>
    </body>
);
export default Layout;
