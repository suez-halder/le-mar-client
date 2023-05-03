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
            <Navbar className='d-flex flex-sm-row flex-column justify-content-between align-items-center w-75 mx-auto my-3 gap-3'>
                
                <h2 className='text-primary mb-sm-4 mb-lg-0'>Le Mar</h2>
                
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

                            <Link to="/login">
                                <Button className='px-4 fs-6' variant="primary">Login</Button>
                            </Link>
                        }
                    </Nav>
                </div>
            </Navbar>
        );
    };

    export default Menubar;