import React from 'react';
import PaymentCard from '../../components/cards/payment-card.js';
import './payment.css';

const PaymentPage = () => {
    return (
        <div className="payment-page">
            <h1 className="payment-page-title">Flexible payment</h1>
            <div className="payment-cards">
                <PaymentCard
                    price="1"
                    title="10%"
                    description="pay when booking"
                    progressValue={10}
                />
                <PaymentCard
                    price="2"
                    title="40%"
                    description="pay 30 days after booking"
                    progressValue={50}
                />
                <PaymentCard
                    price="3"
                    title="50%"
                    description="pay 60 days before trip"
                    progressValue={100}
                />
            </div>
            <h3 className="payment-page-note">
                NOTE: Only applies to bookings made a minimum of 95 days before the trip. For bookings made within 95 days before the trip, see our <span className="terms-link">Terms and conditions</span>.
            </h3>
        </div>
    );
};

export default PaymentPage;
