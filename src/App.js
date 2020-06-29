import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reddit from './Reddit';
import Bikes from './Bikes';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <h1>Infoskjerm</h1>
      <Clock />
      <Reddit />
      <Bikes />
      
    </div>
  );
}

export default App;
