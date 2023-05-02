import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleChefBanner = () => {
    const {id} = useParams();
    const chefDetail = useLoaderData()
    const {picture, name, bio, likes, total_recipes, experience } = chefDetail;
    // console.log(name)
    return (
        <div>
            

            
        </div>
    );
};

export default SingleChefBanner;