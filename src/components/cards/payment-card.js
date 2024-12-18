import React from 'react';
import DollarSign from '../dollar/dollar';
import './payment-card.css';

const PayCard = ({ price, title, description, progressValue }) => {
    return (
        <div className="pay-card">
            <div className='pay-card-dollar-sign'>
                <DollarSign number={price} />
            </div>
            <div className="pay-card-title">{title}</div>
            <div className="pay-card-description">{description}</div>
            <progress className="pay-card-progress" value={progressValue} max="100"></progress>
        </div>
    );
};

export default PayCard;
