import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const RecipeCards = () => {
    const { id } = useParams();
    const chefDetail = useLoaderData()

    const { recipes } = chefDetail;
    // console.log(recipes)


    return (
        <div>
            {
                recipes.map((recipe,index) => <Recipe
                key={index}
                recipe={recipe}

                ></Recipe>)
            }
        </div>
    );
};

export default RecipeCards;
