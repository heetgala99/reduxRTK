import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
    cars: []
};

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        addCar: (state, action) => {
            const newCar = {
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            };
            return {
                ...state,
                cars: [...state.cars, newCar]
            };
        },
        removeCar: (state, action) => {
            return {
                ...state,
                cars: state.cars.filter(car => car.id !== action.payload)
            };
        },
    },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;