import React from 'react';
import { Button, Card } from 'react-bootstrap';
import banner from './../../assets/banner/banner.jpeg'

const Banner = () => {
    return (
        <Card className="bg-dark text-white position-relative">
            <Card.Img style={{ height: '100vh', opacity: '0.5' }} src={banner} alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center" >
                <Card.Text className='fs-4'>
                    <h2>Amazing French Chefs with Their Amazing Recipes</h2>
                </Card.Text>
                <Button>Must Try Recipes</Button>
            </Card.ImgOverlay>
        </Card>


    );
};

export default Banner;