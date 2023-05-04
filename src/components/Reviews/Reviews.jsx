import React from 'react';
import { Card, Carousel, Container, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';


const Reviews = () => {


    return (
        <div className='my-5 gap-5 '>
            <h2 className='text-center my-5 fs-1'>Customer Reviews</h2>


            <Container className='mx-auto'>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <Card className="bg-dark text-white">
                            <Card.Img style={{ height: '600px', opacity: '0.5' }} src='https://i.ibb.co/yXrSrgN/slider1.jpg' alt="Card image" />
                            <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center" style={{ opacity: '0.7' }} >
                                <div className='fs-4 bg-primary px-4 rounded-5 py-5'>
                                    <div className='text-center mb-4'>
                                        <Image style={{ height: '80px', width: '80px' }} src='https://i.ibb.co/fq6zr2H/chef-1.webp' roundedCircle></Image>
                                    </div>
                                    <h2 className='text-light fs-1 w-75 mx-auto text-center'>Pierre-André</h2>
                                    <blockquote className="quote">
                                        <p className='text-center mt-2 fs-6'><i>- "I recently tried a Coq au Vin recipe and was blown away by the flavors. The chicken was so tender and the red wine sauce was rich and delicious. It's definitely a recipe I'll be making again."</i></p>
                                    </blockquote>

                                    <div className='text-center'>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                    </div>

                                </div>


                            </Card.ImgOverlay>
                        </Card>
                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                        <Card className="bg-dark text-white">
                            <Card.Img style={{ height: '600px', opacity: '0.5' }} src='https://i.ibb.co/PrkjrjX/slider2.jpg' alt="Card image" />
                            <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center" style={{ opacity: '0.7' }} >
                                <div className='fs-4 bg-primary px-4 rounded-5 py-5'>
                                    <div className='text-center mb-4'>
                                        <Image style={{ height: '80px', width: '80px' }} src='https://i.ibb.co/Wpnxs89/chef-6.jpg' roundedCircle></Image>
                                    </div>
                                    <h2 className='text-light fs-1 w-75 mx-auto text-center'>Louis-Auguste</h2>
                                    <blockquote className="quote">
                                        <p className='text-center mt-2 fs-6'><i>- "I made a classic French onion soup and it was absolutely amazing. The caramelized onions and beef broth worked so well together and the cheesy croutons on top were the perfect finishing touch. It was a bit time-consuming to make, but well worth the effort."</i></p>
                                    </blockquote>
                                    <div className='text-center '>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                    </div>
                                </div>

                            </Card.ImgOverlay>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className="bg-dark text-white">
                            <Card.Img style={{ height: '600px', opacity: '0.5' }} src='https://i.ibb.co/YdV3xVW/slider3.jpg' alt="Card image" />
                            <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center" style={{ opacity: '0.7' }} >
                                <div className='fs-4 bg-primary px-4 rounded-5 py-5'>
                                    <div className='text-center mb-4'>
                                        <Image style={{ height: '80px', width: '80px' }} src='https://i.ibb.co/2y6jGLh/chef-2.jpg' roundedCircle></Image>
                                    </div>
                                    <h2 className='text-light fs-1 w-75 mx-auto text-center'>Alexandre Édouard</h2>
                                    <blockquote className="quote">
                                        <p className='text-center mt-2 fs-6'><i>- "I've always been intimidated by making croissants from scratch, but I finally gave it a try and was pleasantly surprised by how they turned out. They were flaky, buttery, and tasted just like the ones from a French bakery. It's definitely a recipe I'll be making for special occasions."</i></p>
                                    </blockquote>
                                    <div className='text-center'>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                        <FaStar className='text-warning'></FaStar>
                                    </div>
                                </div>

                            </Card.ImgOverlay>
                        </Card>
                    </Carousel.Item>

                </Carousel>
            </Container>
        </div>
    );

};

export default Reviews;