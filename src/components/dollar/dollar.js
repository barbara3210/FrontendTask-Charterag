import React from 'react';
import './dollar.css';

const DollarSign = ({ number }) => {
    return (
        <div className="dollar-sign-container">
            <div className="dollar-sign-ellipse">
                <div className="dollar-sign-number-container">
                    <span className="dollar-sign-number">{number}</span>
                </div>
            </div>
        </div>
    );
};

export default DollarSign;
