import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllChefs = () => {
    const chefs = useLoaderData();
    // console.log(chefs);
    return (
        <div>
            <h2>This are all chefs:{chefs.length}</h2>
        </div>
    );
};

export default AllChefs;