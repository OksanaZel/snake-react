import React from "react";
import PropTypes from 'prop-types';
import { SnakeDot } from "../Snake/Snake.styled";

function SnakeBody({ snakeDots }) {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <SnakeDot key={i} style={style} />;
      })}
    </div>
  );
}

SnakeBody.propTypes = {
  snakeDots: PropTypes.node,
};

export default SnakeBody;
