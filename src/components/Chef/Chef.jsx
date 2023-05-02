import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    // console.log(chef);
    const { id, name, picture, experience, total_recipes, likes } = chef;
    // console.log(experience)

    return (
        <Col>
            <Card >
                <Card.Img src={picture} style={{height:'600px'}}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link to={`/chefs/${id}`}><Button>View Recipes</Button></Link>
                    <Card.Text>
                        Years of experience: {experience} years
                    </Card.Text>
                    <Card.Text>
                        Total Recipes: {total_recipes}
                    </Card.Text>
                    <Card.Text>
                        {likes} likes
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>




    );
};

export default Chef;