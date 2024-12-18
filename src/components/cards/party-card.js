import React from 'react';
import Image from 'next/image'; // Import Image komponentu
import './party-card.css';

const PartyCard = () => {
    return (
        <div className="party-card-container">
            <div className="party-card-title">
                Dubrovnik Party Route
            </div>
            <div className="party-card-rating">
                {/* Zamijenjeno img s Image */}
                <Image src="/icons/star.png" alt="star" className="star-icon" width={20} height={20} />
                <span className="rating-text">4.9</span>
                <span className="reviews-text">Rating of 461 reviews</span>
            </div>
            <div className="party-card-details">
                <div className="icon-frame">
                    <div className="icon-frame-content">
                        {/* Zamijenjeno img s Image */}
                        <Image src="/icons/Icon1.png" alt="Party vibe" className="icon-img" width={40} height={40} />
                        <span className="icon-text">Party vibe</span>
                    </div>
                    <div className="icon-frame-content">
                        <Image src="/icons/Icon2.png" alt="Up to 40 people" className="icon-img" width={40} height={40} />
                        <span className="icon-text">Up to 40 people</span>
                    </div>
                    <div className="icon-frame-content">
                        <Image src="/icons/Icon3.png" alt="20 - 40 age range" className="icon-img" width={40} height={40} />
                        <span className="icon-text">20 - 40 age range</span>
                    </div>
                    <div className="icon-frame-content">
                        <Image src="/icons/Icon4.png" alt="Free WiFi" className="icon-img" width={40} height={40} />
                        <span className="icon-text">Free WiFi</span>
                    </div>
                    <div className="icon-frame-content">
                        <Image src="/icons/Icon5.png" alt="July | August" className="icon-img" width={40} height={40} />
                        <span className="icon-text">July | August</span>
                    </div>
                </div>
                <button className="party-card-button">Book Now</button>
                <div className="party-card-price">
                    Prices from €1136 per person
                </div>
            </div>
        </div>
    );
};

export default PartyCard;
