import { useState } from "react";

export const IngredientList = ({ availableIngredients, addToBurger }) => {
  const [ingredient, setIngredient] = useState([]);
  return (
    <>
      <ul>
        {availableIngredients.map((i, index) => (
          
          <li
            key={index}
            style={{ backgroundColor: i.color }}
            onClick={() => addToBurger(i)}
          >
            {i.name}{" "}
          </li>
        ))}
      </ul>
    </>
  );
};