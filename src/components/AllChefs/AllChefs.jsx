import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const AllChefs = () => {
    const allChefs = useLoaderData();
    // console.log(chefs);
    return (
        <div>
            <h2 className='text-center my-4'>Our Exclusive Chefs</h2>
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