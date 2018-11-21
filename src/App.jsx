import React, { Component } from 'react';
import './App.css';
import FoodPicker from './components/FoodPicker';

import ButtonAppBar from './components/ButtonAppBar';

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <h1>Feed Me</h1>
        <FoodPicker />
      </div>
    );
  }
}

export default App;
