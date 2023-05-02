import React from 'react';
import { useEffect } from 'react';
import AllChefs from '../components/AllChefs/AllChefs';
import Banner from '../components/Banner/Banner';
import Reviews from '../components/Reviews/Reviews';
import ServicesOffer from '../components/ServicesOffer/ServicesOffer';


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <AllChefs></AllChefs>
            <ServicesOffer></ServicesOffer>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;