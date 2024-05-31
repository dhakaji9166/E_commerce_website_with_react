import React from 'react';
import './Hero.css';
import handIcon from '../Components/Assets/hand_icon.png';
import arrowIcon from '../Components/Assets/arrow.png';
import heroImage from '../Components/Assets/hero_image.png';

function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={handIcon} alt="Hand icon" />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrowIcon} alt="Arrow icon" />
                </div>
            </div>
            <div className="hero-right">
                <img src={heroImage} alt="Hero display" />
            </div>
        </div>
    );
}

export default Hero;
