import React from "react";

const Foods = ({ foods, onDelete }) => {
  let foodList = foods.map((food, index) => {
    return (
      <li key={index}>
        <button
          type="button"
          onClick={() => onDelete(index)}
        >
          X
        </button>
        {food}
      </li>
    );
  });

  return <ul>{foodList}</ul>;
};

export default Foods;
