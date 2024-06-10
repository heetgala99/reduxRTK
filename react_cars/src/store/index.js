import { configureStore } from '@reduxjs/toolkit';
import {
    carsReducer,
    addCar,
    removeCar,
    changeSearchTerm
} from './slices/carsSlice.js';
import {
    formReducer,
    changeName,
    changeCost
} from './slices/formSlice.js';

// Configure the store
const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer,
    },
});

export {
    store,
    changeName,
    changeCost,
    changeSearchTerm,
    addCar,
    removeCar,
}