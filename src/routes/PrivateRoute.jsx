import React from 'react';
import { useContext } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Row>
                    <Col className="text-center">
                        <Spinner animation="grow" variant="primary" />
                        <p>Loading...</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
