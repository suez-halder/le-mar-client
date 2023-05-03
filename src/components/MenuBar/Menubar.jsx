import React from 'react';
import { useContext } from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import logo from './../../assets/logo/logo.png'

const Menubar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


    return (
        <Navbar className='d-flex justify-content-between align-items-center w-75 mx-auto my-2'>
            <Image style={{ height: '40px' }} src={logo}></Image>
            <div className='d-flex gap-4 fs-5'>
                <Link to='/' className='text-decoration-none'>Home</Link>
                <Link to='/blogs' className='text-decoration-none'>Blogs</Link>
                <Nav>
                    {
                        user && <Image style={{height: '40px', width:'40px'}} src={user.photoURL} alt="" title={user.displayName} rounded className='me-2' />
                    }

                    {user ?
                        <Button onClick={handleLogOut} variant="danger">Logout</Button> :
                        
                            <Link to="/login">
                                <Button variant="primary">Login</Button>
                            </Link>
                            
                        
                    }
                </Nav>
            </div>
        </Navbar>
    );
};

export default Menubar;