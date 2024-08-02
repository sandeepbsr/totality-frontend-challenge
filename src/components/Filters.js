import React from 'react';

const Filters = ({ onFilterChange }) => {
    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        onFilterChange(prevFilters => ({
            ...prevFilters,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="filters">
            <h2>Filters</h2>
            <label>
                Location:
                <select name="location" onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="city">City</option>
                    <option value="suburbs">Suburbs</option>
                    {/* Add more location options */}
                </select>
            </label>
            <label>
                Price Range:
                <input
                    type="number"
                    name="minPrice"
                    onChange={handleFilterChange}
                    placeholder="Min Price"
                />
                <input
                    type="number"
                    name="maxPrice"
                    onChange={handleFilterChange}
                    placeholder="Max Price"
                />
            </label>
            <label>
                Bedrooms:
                <select name="bedrooms" onChange={handleFilterChange}>
                    <option value="">Any</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3+ Bedrooms</option>
                </select>
            </label>
            <label>
                Amenities:
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="wifi"
                            onChange={handleFilterChange}
                        />
                        Wi-Fi
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="parking"
                            onChange={handleFilterChange}
                        />
                        Parking
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="pool"
                            onChange={handleFilterChange}
                        />
                        Pool
                    </label>
                </div>
            </label>
        </div>
    );
};

export default Filters;
