import React from 'react';
import { Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo/logo.png'

const Menubar = () => {
    return (
        <Navbar className='d-flex justify-content-between align-items-center w-75 mx-auto my-2'>
            <Image style={{height: '40px'}} src={logo}></Image>
            <div className='d-flex gap-4 fs-5'>
                <Link  to='/' className='text-decoration-none'>Home</Link>
                <Link to='/blogs' className='text-decoration-none'>Blogs</Link>
                <Link to='/login' className='text-decoration-none'>Login</Link>
                <Link to='/register' className='text-decoration-none'>Register</Link>
            </div>
        </Navbar>
    );
};

export default Menubar;