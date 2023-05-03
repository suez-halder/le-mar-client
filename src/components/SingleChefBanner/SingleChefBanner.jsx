import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { FaClock, FaHeart, FaUtensils } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import Typewriter from 'react-ts-typewriter';

const SingleChefBanner = () => {
    const { id } = useParams();
    const chefDetail = useLoaderData()
    const { picture, name, bio, likes, total_recipes, experience } = chefDetail;
    // console.log(name)
    return (
        <>
            <Container className='w-75 mx-auto my-5'>
                <h2 className='text-center my-4 text-primary fs-2'><Typewriter text={name} loop speed={400} delay={100} /></h2>
                <Row className="justify-content-center my-4">
                    <Col md={6} className="d-flex align-items-center">
                        <Image src={picture} rounded className="w-100 shadow-lg" />
                    </Col>
                    <Col md={6} className="py-4 w-100">
                        <p className="fs-6 text-justify">{bio}</p>
                        <hr />
                        <div className='d-flex justify-content-between mt-5'>
                            <div className="d-flex align-items-center">
                                <FaHeart className="text-danger me-2" />
                                <span className='fs-5'>{likes} Likes</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <FaUtensils className="text-secondary me-2" />
                                <span className='fs-5'>Total Recipes: {total_recipes}</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <FaClock className="text-success me-2" />
                                <span className='fs-5'>Experience: {experience} years</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default SingleChefBanner;