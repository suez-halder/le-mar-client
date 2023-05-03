import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Menubar from '../components/MenuBar/Menubar';
import './Main.css'


const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div className='min-vh-custom'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;