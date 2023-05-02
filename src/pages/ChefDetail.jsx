import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetail = () => {
    const {id} = useParams();
    const chefDetail = useLoaderData()

    console.log(chefDetail);

    const {picture, name, bio, } = chefDetail;
    
    return (
        <div>
            <h2>Chef Name: {name}</h2>
            
        </div>
    );
};

export default ChefDetail;