import React from "react";
import { FoodDot } from "./SnakeFood.styled";

function SnakeFood({ dot }) {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };
  return <FoodDot style={style}></FoodDot>;
}

export default SnakeFood;
