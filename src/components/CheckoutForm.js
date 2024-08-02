import React, { useState } from 'react';

const CheckoutForm = ({ totalCost }) => {
    const [contact, setContact] = useState('');
    const [payment, setPayment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Booking confirmed!');
        // Implement form submission logic here
    };

    return (
        <div className="checkout-form">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Contact Information:
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Your contact info"
                        required
                    />
                </label>
                <label>
                    Payment Details:
                    <input
                        type="text"
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}
                        placeholder="Your payment details"
                        required
                    />
                </label>
                <p>Total Cost: ${totalCost.toFixed(2)}</p>
                <button type="submit">Confirm Booking</button>
            </form>
        </div>
    );
};

export default CheckoutForm;
