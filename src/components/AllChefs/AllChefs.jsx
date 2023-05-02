import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const AllChefs = () => {
    const allChefs = useLoaderData();
    // console.log(chefs);
    return (
        <div>
            <h2></h2>
            {
                allChefs.map(chef => <Chef
                key={chef.id}
                chef={chef}
                ></Chef>)
            }
        </div>
    );
};

export default AllChefs;