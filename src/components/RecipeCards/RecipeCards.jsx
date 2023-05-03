import React from 'react';
import { Table } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const RecipeCards = () => {
    const { id } = useParams();
    const chefDetail = useLoaderData()

    const { recipes } = chefDetail;
    // console.log(recipes)


    return (
        <div>
                
                
                <div>
                    {


                        recipes.map((recipe, index) => <Recipe
                            key={index}
                            recipe={recipe}

                        ></Recipe>)


                    }
                </div>
            


        </div>
    );
};

export default RecipeCards;
