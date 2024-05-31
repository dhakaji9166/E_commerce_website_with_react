import React from 'react';
import './Shop.css'; 
import Hero from '../Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';


function Shop() {
    return (
        <div className="shop-container">
            <Hero />
            <Popular />
            <Offers />
        </div>
    );
}

export default Shop;
