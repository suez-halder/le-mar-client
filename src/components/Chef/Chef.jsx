import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    console.log(chef);
    const {id} = chef;

    return (
        <div>
            <Link to={`/chefs/${id}`}><button>View Recipes</button></Link>
        </div>
    );
};

export default Chef;