import React from 'react';
import './Popular.css';
import dataProduct from '../Assets/data'; 
import Items from '../Items/Items';

function Popular() {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {dataProduct.map((item) => (
                    <Items
                        key={item.id} 
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Popular;
