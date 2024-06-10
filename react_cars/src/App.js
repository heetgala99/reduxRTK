import React from 'react';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarForm from './components/CarForm'
import CarValue from './components/CarValue';

function App() {
    return (
        <div className="container is-fluid">
            <h1>React Cars</h1>
            <p>React Cars is a simple React app that displays a list of cars.</p>
            
            <CarForm />
            <CarSearch />
            <CarList />
            <CarValue />
        </div>
    );
}

export default App;;