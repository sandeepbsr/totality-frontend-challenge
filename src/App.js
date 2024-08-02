import React, { useState } from 'react';
import PropertyList from './components/PropertyList';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import Filters from './components/Filters';
import propertiesData from './data/properties.json';

const App = () => {
    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState({});
    const [filteredProperties, setFilteredProperties] = useState(propertiesData);

    const addToCart = (property) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === property.id);
            if (existingItem) {
                return prevCart.map(item => 
                    item.id === property.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...property, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            )
        );
    };

    const applyFilters = () => {
        const { location, minPrice, maxPrice, bedrooms, wifi, parking, pool } = filter;
        const filtered = propertiesData.filter(property => {
            return (
                (!location || property.location === location) &&
                (!minPrice || property.price >= minPrice) &&
                (!maxPrice || property.price <= maxPrice) &&
                (!bedrooms || property.bedrooms === bedrooms) &&
                (!wifi || property.amenities.includes('wifi')) &&
                (!parking || property.amenities.includes('parking')) &&
                (!pool || property.amenities.includes('pool'))
            );
        });
        setFilteredProperties(filtered);
    };

    const handleFilterChange = (filters) => {
        setFilter(filters);
        applyFilters();
    };

    const totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="app">
            <Filters onFilterChange={handleFilterChange} />
            <PropertyList properties={filteredProperties} onAddToCart={addToCart} />
            <Cart
                cartItems={cart}
                onRemoveFromCart={removeFromCart}
                onUpdateQuantity={updateQuantity}
            />
            {cart.length > 0 && <CheckoutForm totalCost={totalCost} />}
        </div>
    );
};

export default App;
