import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store/index.js';

const CarList = () => {
    const dispatch = useDispatch();

    const {
        cars,
        name
    } = useSelector((state) => {
        const {
            cars: {
                cars,
                searchTerm
            } = {},
            form: {
                name
            } = {}
        } = state;
        const filteredCars = cars.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return {
            cars: filteredCars,
            name
        }
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCards = cars.map((car) => {
        // decide if this car should be bold
        // state.name
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        console.log('bold', bold, name, car.name);

        return (
            <div key={ car.id } className={ `panel ${bold && 'bold'}` }>
                <p>{ car.name } - ${ car.cost }</p>
                <button
                    className="button is-danger"
                    onClick={ () => handleCarDelete(car) }
                >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="car-list">
            { renderedCards }
            <hr />
        </div>
    );
};

export default CarList;