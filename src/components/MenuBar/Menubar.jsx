import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo/logo.png'

const Menubar = () => {
    return (
        <Navbar bg="info" expand="lg" className='d-flex justify-content-around'>
            <Image src={logo}></Image>
            <Link to='/'>Home</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </Navbar>
    );
};

export default Menubar;