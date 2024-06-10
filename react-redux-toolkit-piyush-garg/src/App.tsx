import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { increment, decrement } from './redux/slices/counter';

function App() {
  const counter = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Count is {counter}</h1>
        <button onClick={ () => dispatch(increment()) }>Increment</button>
        <button onClick={ () => dispatch(decrement()) }>Decrement</button>
      </header>
    </div>
  );
}

export default App;
