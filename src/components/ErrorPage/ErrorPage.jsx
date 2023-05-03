import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import errorPic from './../../assets/error/error/error.jpg'

const ErrorPage = () => {
    const navigate = useNavigate();

    const error = useRouteError();
    // console.error(error);

    return (
        <Container style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Row xs={1} md={2} className='d-flex align-items-center'>
                <Col>
                    <h3 className='fs-1 text-danger'>YOU SEEM TO BE LOST!</h3>
                    <p>The page you're looking for isn't available. Try searching again or use the Go Back button below.</p>
                    <Button onClick={() => {
                        navigate(-1);
                    }}> <FaArrowLeft></FaArrowLeft> Go Back</Button>
                </Col>
                <Col>
                    <img src={errorPic} alt="" className='w-100' />
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorPage;