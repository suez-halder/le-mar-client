import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Menubar from '../components/MenuBar/Menubar';


const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;