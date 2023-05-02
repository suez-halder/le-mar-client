import React from 'react';
import RecipeCards from '../components/RecipeCards/RecipeCards';
import SingleChefBanner from '../components/SingleChefBanner/SingleChefBanner';

const ChefDetail = () => {
    return (
        <>
            <SingleChefBanner></SingleChefBanner>
            <RecipeCards></RecipeCards>
            
        </>
    );
};

export default ChefDetail;