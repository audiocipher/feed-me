import React, { Component } from 'react';
import './App.css';
import FoodPicker from './components/FoodPicker';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Feed Me</h1>
        <FoodPicker />
      </div>
    );
  }
}

export default App;
