import React from 'react';
import { useParams } from 'react-router-dom';

const ChefDetail = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <h2>This is chef details</h2>
        </div>
    );
};

export default ChefDetail;