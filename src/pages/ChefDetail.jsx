import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetail = () => {
    const {id} = useParams();
    const chefDetail = useLoaderData()

    console.log(chefDetail);
    
    return (
        <div>
            <h2>Chef Name: {chefDetail.name}</h2>
            
        </div>
    );
};

export default ChefDetail;