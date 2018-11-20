import React, { Component } from "react";
import Foods from "./Foods";

class FoodPicker extends Component {
  state = {
    foods: ["Chipotle", "Torchy's", "Cafe Java"],
    foodInput: "",
    foodChoice: ""
  };

  handleReset = () => {
    this.setState({ foods: [], foodInput: "", foodChoice: "" });
  };

  handleChange = event => {
    this.setState({ foodInput: event.target.value });
  };

  handleAdd = event => {
    // We don't want to add duplicate foods
    let found = this.state.foods.find(
      food => food.toLowerCase() === this.state.foodInput.toLowerCase()
    );

    if (!found && this.state.foodInput) {
      let newFoods = [...this.state.foods, this.state.foodInput];

      this.setState({ foods: newFoods, foodInput: "" });
    } else {
      this.setState({ foodInput: "" });
    }

    event.preventDefault();
  };

  chooseFood = () => {
    let randomIndex = Math.floor(Math.random() * this.state.foods.length);
    let randomFood = this.state.foods[randomIndex];

    this.setState({ foodChoice: randomFood });
  };

  handleDelete = index => {
    let newFoods = [
      ...this.state.foods.slice(0, index),
      ...this.state.foods.slice(index + 1)
    ];

    this.setState({ foods: newFoods });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleAdd(event)}>
          <button type="button" onClick={() => this.handleReset()}>
            Reset
          </button>
          <input
            type="text"
            placeholder="Enter food..."
            value={this.state.foodInput}
            onChange={event => this.handleChange(event)}
          />
          <input type="submit" value="Add" />
        </form>
        <Foods foods={this.state.foods} onDelete={this.handleDelete} />
        <button type="button" onClick={() => this.chooseFood()}>
          Choose my food
        </button>
        <h3>{this.state.foodChoice}</h3>
      </div>
    );
  }
}

export default FoodPicker;
