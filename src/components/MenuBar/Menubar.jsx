import React from 'react';
import { Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo/logo.png'

const Menubar = () => {
    return (
        <Navbar bg="light" expand="lg" className='d-flex justify-content-between align-items-center'>
            <Image src={logo}></Image>
            <div className='d-flex gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </Navbar>
    );
};

export default Menubar;