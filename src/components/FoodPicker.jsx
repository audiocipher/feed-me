import React, { Component } from "react";

class FoodPicker extends Component {
  state = {
    foods: ["Chipotle", "Dickey's", "Torchy's"],
    foodInput: '',
    foodChoice: ''
  };

  // do I need to use event.preventDefault() ???

  handleReset = (event) => {
    this.setState({ foods: [], foodChoice: '' });

    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ foodInput: event.target.value });

    event.preventDefault(); // do we need this?
  };

  handleAdd = (event) => {
    let newFoods = [
      ...this.state.foods,
      this.state.foodInput
    ];

    this.setState({ foods: newFoods, foodInput: '' });

    event.preventDefault();
  };

  handleSubmit = (event) => {

    let randomIndex = Math.floor(Math.random() * this.state.foods.length);

    let randomFood = this.state.foods[randomIndex];

    console.log(randomFood);

    this.setState({ foodChoice: randomFood });

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <button type="button" onClick={(event) => this.handleReset(event)} >Reset</button>
        <input type="text" value={this.state.foodInput} onChange={(event) => this.handleChange(event)} />
        <button type="button" onClick={(event) => this.handleAdd(event)} >Add Food</button>
        {/* Food components go here */}
        <ul>
          {
            this.state.foods.map((food, index) => <li key={index}>{food}</li>)
          }
        </ul>
        <button type="button" onClick={(event) => this.handleSubmit(event)} >Pick my food</button>
        { /* Food choice goes here */ }
        <p>{this.state.foodChoice}</p>
      </div>
    );
  }
}

export default FoodPicker;
