import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaApple, FaGoogle } from 'react-icons/fa';


const Footer = () => {
    return (
        <Container fluid className="bg-light text-dark py-5 border-top mt-5">
            <Container className=" mx-auto">
                <Row className="mb-3">
                    <h3 className="text-center fs-2"> Download our Recipe Book </h3>
                    <p className="text-center"> Discover the secret recipes of our exclusive chefs. </p>
                </Row>
                <div className='text-center'>
                    <Button className='w-25 mx-auto'>Recipe Book</Button>
                </div>

                <Row className="justify-content-md-between fs-6  mt-5">
                    <Col md={4} className="order-md-2">
                        <span className="px-2">About us</span>
                        <span className="px-2 border-start border-end">Contact us</span>
                        <span className="px-2">Privacy Policy</span>
                    </Col>
                    <Col md={4} className="order-md-1 text-center text-md-start mt-3 mt-md-0">
                        <p>&copy; Le Mer, 2023.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;