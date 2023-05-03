import React from 'react';
import { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    // console.log(recipe);

    const { name, ingredients, cooking_method, rating } = recipe;
    const [details, setDetails] = useState(false);
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    // console.log(name);

    const handleHeartClick = () => {
        if (!isHeartClicked) {
            setIsHeartClicked(true);
            toast.success("Recipe Added");
        }
    };



    return (
        <Container>
            <Table striped="columns" bordered hover responsive>

                <thead>
                    <tr>

                        <th className='bg-info rounded'>Recipe Name</th>
                        <th className='bg-warning rounded'>Ingredients</th>
                        <th className='bg-info rounded'>Cooking Method</th>
                        <th className='bg-warning rounded'>Rating</th>
                        <th className='bg-info rounded'></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='align-middle w-25'>{name}</td>
                        <td>
                            <ul>
                                {ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </td>
                        <td className='w-25'>{cooking_method.slice(0, 300)} ...<span className='text-primary'>Read More</span> </td>
                        <td className='align-middle text-center'>{rating}</td>
                        <td className='align-middle text-center'>
                            <Button onClick={handleHeartClick} variant="outline-danger" disabled={isHeartClicked}>
                                <FaHeart />
                            </Button>
                            <ToastContainer
                                position="bottom-center"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </td>
                    </tr>

                </tbody>
            </Table>
        </Container>
    );
};

export default Recipe;