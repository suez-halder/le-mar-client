import React from 'react';
import { Button, Card } from 'react-bootstrap';
import banner from './../../assets/banner/banner.jpeg'

const Banner = () => {
    return (
        <Card className="bg-dark text-white">
            <Card.Img style={{ height: '600px', opacity: '0.5' }} src={banner} alt="Card image"  />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center" style={{ opacity: '0.8' }} >
                <div className='fs-4 bg-secondary px-4 rounded-5 py-5'>
                    <h2 className='text-light fs-1 w-75 mx-auto text-center'>Amazing French Chefs with Their Mouthwatering Recipes</h2>
                </div>
                <Button variant='primary' className='my-5 fs-4 px-4 rounded-4'>Must Try Recipes</Button>
            </Card.ImgOverlay>
        </Card>


    );
};

export default Banner;