import React from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { FaGifts } from 'react-icons/fa';
import { MdBrunchDining, MdOutlineRestaurantMenu } from "react-icons/md";

const ServicesOffer = () => {
    return (
        <div>
            <h2 className='text-center my-5 fs-1'>Services We Offer</h2>
            <div className='bg-primary py-5 mt-5 bg-opacity-25'>
                <Container className='d-flex flex-sm-row flex-column justify-content-between gap-4'>
                    <Card border="primary" style={{ width: '18rem' }} className='rounded-4 w-100 mx-auto'>
                        <Card.Header className='text-center fs-3'>Gift Cards</Card.Header>
                        <Card.Body>
                            <FaGifts className='fs-1 w-100 mx-auto mb-3'></FaGifts>
                            <Card.Text>
                                The perfect way to treat your loved ones to a culinary experience they won't forget!
                            </Card.Text>
                        </Card.Body>
                        <Button className='w-50 mx-auto my-2'>Find Out More</Button>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }} className='rounded-4 w-100 mx-auto'>
                        <Card.Header className='text-center fs-3'>Private Dining</Card.Header>
                        <Card.Body>
                            <MdBrunchDining className='fs-1 w-100 mx-auto mb-3'></MdBrunchDining>
                            <Card.Text>
                                Our private dining rooms are perfect for hosting events like birthdays, anniversaries, or business meetings.
                            </Card.Text>
                        </Card.Body>
                        <Button className='w-50 mx-auto my-2'>Find Out More</Button>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }} className='rounded-4 w-100 mx-auto'>
                        <Card.Header className='text-center fs-3'>Catering</Card.Header>
                        <Card.Body>
                            <MdOutlineRestaurantMenu className='fs-1 w-100 mx-auto mb-3'></MdOutlineRestaurantMenu>
                            <Card.Text>
                                We provide customizable menus featuring our signature dishes, expertly prepared and beautifully presented.
                            </Card.Text>
                        </Card.Body>
                        <Button className='w-50 mx-auto my-2'>Find Out More</Button>
                    </Card>



                </Container>
            </div>
        </div>
    );
};

export default ServicesOffer;