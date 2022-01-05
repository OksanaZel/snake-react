import React from "react";
import PropTypes from 'prop-types';
import { FoodDot } from "./SnakeFood.styled";

function SnakeFood({ dot }) {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };
  return <FoodDot style={style}></FoodDot>;
}

SnakeFood.propTypes = {
  snakeDots: PropTypes.node,
};

export default SnakeFood;
