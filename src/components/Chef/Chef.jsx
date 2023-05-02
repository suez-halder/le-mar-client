import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    // console.log(chef);
    const { id, name, picture, experience, total_recipes, likes } = chef;

    

    return (

        <Card className="text-center">
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Img className='w-25' variant="top" src={picture} />
                <Link to={`/chefs/${id}`}><Button>View Recipes</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default Chef;