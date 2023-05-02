import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo/logo.png'

const Menubar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Image src={logo}></Image>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </Navbar>
    );
};

export default Menubar;