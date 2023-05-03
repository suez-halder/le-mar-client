import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaApple, FaGoogle } from 'react-icons/fa';


const Footer = () => {
    return (
        <Container fluid className="bg-light text-dark py-5 border-top mt-5">
            <Container className=" mx-auto">
                <Row className="justify-content-center mb-3">
                    <h3 className="text-center fs-2"> Download our Recipe Book </h3>
                    <p className="text-center"> Discover the secret recipes of our exclusive chefs. </p>
                </Row>
                <Row className="justify-content-center my-5">
                    <Col xs={12} md={4} className="d-flex justify-content-around align-items-center border rounded-4 px-4 py-2 w-25 mx-2 bg-success">
                        <FaGoogle className="me-5 text-white" size={30} />
                        <div className="text-start">
                            <p className="fs-6">Download on</p>
                            <p className="fs-5">Google Play Store</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="d-flex justify-content-around align-items-center border rounded-4 px-4 py-2 w-25 mx-2 bg-danger">
                        <FaApple className='text-white' size={30} />
                        <div className="text-start">
                            <p className="fs-6">Download on</p>
                            <p className="fs-5">Apple Store</p>
                        </div>
                    </Col>
                </Row>
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