import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const AllChefs = () => {
    const allChefs = useLoaderData();
    // console.log(chefs);
    return (
        <div className='mt-5'>
            <h2 className='text-center my-4'>Our Exclusive Chefs</h2>
            <p className='text-center w-75 mx-auto my-4'>For those who want to experience the very best of French cuisine, there is no better way than to explore it with the guidance of French exclusive chefs. These expert chefs are trained in the art of French cooking, with a deep understanding of its techniques, ingredients, and rich history.
            </p>
            <Row xs={1} md={2} lg={2} className="g-4 w-75 mx-auto">
                {
                    allChefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </Row>
        </div>
    );
};

export default AllChefs;