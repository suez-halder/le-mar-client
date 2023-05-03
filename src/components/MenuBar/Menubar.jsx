import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import logo from './../../assets/logo/logo.png'

const Menubar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


        return (
            <Navbar className='d-flex justify-content-between align-items-center w-75 mx-auto my-5'>
                
                <h2 className='text-primary'>Le Mar</h2>
                
                <div className='d-flex align-items-center gap-5 fs-5'>
                    <ActiveLink to='/' className='text-decoration-none'>Home</ActiveLink>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                    <Nav>
                        {
                            user && <Image
                                style={{ height: '40px', width: '40px' }}
                                src={user.photoURL} alt=""
                                title={user.displayName}
                                roundedCircle
                            
                                className='me-2' />
                        }
                        
                        {user ?
                            <Button onClick={handleLogOut} variant="danger">Logout </Button> :

                            <ActiveLink to="/login">
                                <Button className='px-4 fs-6' variant="primary">Login</Button>
                            </ActiveLink>
                        }
                    </Nav>
                </div>
            </Navbar>
        );
    };

    export default Menubar;