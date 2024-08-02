import React from 'react';
import PropertyItem from './PropertyItem';

const PropertyList = ({ properties, onAddToCart }) => {
    return (
        <div className="property-list">
            {properties.map(property => (
                <PropertyItem key={property.id} property={property} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default PropertyList;
