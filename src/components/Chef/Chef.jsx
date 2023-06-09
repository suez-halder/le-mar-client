import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaClock, FaHeart, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const Chef = ({ chef }) => {
    // console.log(chef);
    const { id, name, picture, experience, total_recipes, likes } = chef;
    // console.log(experience)

    return (
        <Col>
            <Card className="border-0 shadow-lg" >
                <LazyLoad height={400} threshold={1}>
                    <Card.Img src={picture} style={{ height: '400px', borderRadius: '40px' }} className='p-4' />
                </LazyLoad>
                <Card.Body className="text-center">
                    <Card.Title className="mb-3 fw-semibold fs-3">{name}</Card.Title>

                    <Card.Text>
                        <FaClock className='me-2 text-success'></FaClock> Years of experience: {experience} years
                    </Card.Text>
                    <Card.Text>
                        <FaUtensils className='me-2 text-secondary'></FaUtensils> Total Recipes: {total_recipes}
                    </Card.Text>
                    <Card.Text>
                        <FaHeart className='text-danger'></FaHeart> {likes}
                    </Card.Text>
                    <Link to={`/chefs/${id}`} className="text-decoration-none">
                        <Button variant="primary" className="mb-3">View Recipes</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>




    );
};

export default Chef;