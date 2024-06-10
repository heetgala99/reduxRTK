import React from 'react';
import { useSelector } from 'react-redux';

const CarValue = () => {
    const totalCost = useSelector((state) => {
        const {
            cars: {
                cars,
                searchTerm
            } = {}
        } = state;
        const filteredCars = cars.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return filteredCars.reduce((acc, car) => {
            return acc + car.cost;
        }, 0);
    });

    return (
        <div className="car-value">
            Total Cost: ${ totalCost}
        </div>
    );
};

export default CarValue;