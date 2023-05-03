import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const {logIn, displayUser, setUser} = useContext(AuthContext);
    
    
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        logIn(email, password)
        .then(result=>{
            const loggedUser = result.user;
            // displayUser(loggedUser.photoURL);
            // setUser(loggedUser);
            console.log(loggedUser);
            navigate('/')
            
        })
        .catch(error =>{
            setError(error);
            console.log(error.message);
        })

        
        
    }



    return (
        <Container>
            <Row className="vh-75 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <div className="border border-3 border-primary"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h3 className=" mb-5 text-center">Please enter your login!</h3>
                                <div className="mb-3">
                                    <Form onSubmit={handleLogin}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-center">
                                                Email address
                                            </Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name='email' />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" name='password' />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicCheckbox"
                                        >
                                            <p className="small">
                                                <a className="text-primary" href="#!">
                                                    Forgot password?
                                                </a>
                                            </p>
                                        </Form.Group>
                                        <div className="d-grid">
                                            <Button variant="primary" type="submit">
                                                Login
                                            </Button>
                                        </div>
                                    </Form>
                                    {
                                        error
                                    }
                                    <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Don't have an account?{" "}
                                            <Link to='/register' className="text-primary fw-bold">
                                                Sign Up
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;