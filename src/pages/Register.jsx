import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Register = () => {
    const [error, setError] = useState(null);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        if (password.length <= 6) {
            setError("Password should be at least 6 characters");
        }

        



    }



    return (
        <Container>
            <Row className="vh-75 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <div className="border border-3 border-primary"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h3 className=" mb-5 text-center">Please Register!</h3>
                                <div className="mb-3">
                                    <Form onSubmit={handleRegister}>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label className="text-center">
                                                Name
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Your Name" name='name' />
                                        </Form.Group>
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
                                            controlId="formBasicPhoto"
                                        >
                                            <Form.Label>Photo URL</Form.Label>
                                            <Form.Control type="text" placeholder="Photo URL" name='photo' />
                                        </Form.Group>
                                        <div className='d-flex align-items-center'>
                                            <hr className='w-50 me-2' />
                                            <span>or</span>
                                            <hr className='w-50 ms-2'/>
                                        </div>


                                        <div className='fs-4 d-flex justify-content-around gap-4 m-4'>

                                            <FaGoogle></FaGoogle>
                                            <FaGithub></FaGithub>
                                        </div>
                                        <div className="d-grid">
                                            <Button variant="primary" type="submit">
                                                Register
                                            </Button>
                                        </div>
                                    </Form>

                                    <div className='my-4 text-danger'>
                                        {error}
                                    </div>

                                    <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Already have an account?{" "}
                                            <Link to='/login' className="text-primary fw-bold">
                                                Login
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

export default Register;