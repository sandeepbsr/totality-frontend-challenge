import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
    const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>${item.price} x {item.quantity}</p>
                            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${totalCost.toFixed(2)}</h3>
                </>
            )}
        </div>
    );
};

export default Cart;
