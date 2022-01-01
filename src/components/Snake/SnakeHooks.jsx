import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { getEmptyRows } from "../utils/getEmptyRows";
import { getRandomCoordinates } from "../utils/getRandomCoordinates";
import { increaseSpeed } from "components/utils/increaseSpeed";
import { SnakeBox, SnakeGrid} from "./Snake.styled";
import SnakeBody from "./SnakeBody";
import SnakeFood from "./SnakeFood";
import { connect } from "react-redux";
import {changeScore} from "../../redux/action"

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const STOP = 32;

function SnakeHooks({id, onChangeScore}) {

  console.log(id)

  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [4, 0],
  ]);
  const [food, setFood] = useState(getRandomCoordinates());
  const [speed, setSpeed] = useState(100);
  // const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  // const [alive, setAlive] = useState(false);
  const [direction, setDirection] = useState(RIGHT);
  const [grid, setGrid] = useState(getEmptyRows());
  // const [name, setName] = useState('Play');
  const intervalId = useRef(null);
  
  useEffect(() => {
    window.onkeydown = onKeyDown;
    checkOutOfBorders();
    checkIfCollapsed();
    checkIfEat();

    intervalId.current = setInterval(() => {
      moveSnake();
    }, speed);
    return () => clearInterval(intervalId.current);
  });

  function onKeyDown(e) {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        setDirection(UP);
        break;
      case 40:
        setDirection(DOWN);
        break;
      case 37:
        setDirection(LEFT);
        break;
      case 39:
        setDirection(RIGHT);
        break;
      case 32:
        setDirection(STOP);
        break;

      default:
        break;
    }
  }

  function moveSnake() {
    // if (state === true){
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case RIGHT:
        head = [head[0] + 4, head[1]];
        break;
      case LEFT:
        head = [head[0] - 4, head[1]];
        break;
      case DOWN:
        head = [head[0], head[1] + 4];
        break;
      case UP:
        head = [head[0], head[1] - 4];
        break;

      default:
        return;
    }
    dots.push(head);
    dots.shift();
    setSnakeDots(dots);
    // }
  }

  function checkOutOfBorders() {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    if (head[0] >= 100) {
      head[0] = head[0] - 100;
      snake.shift();
    }
    if (head[1] >= 100) {
      head[1] = head[1] - 100;
      snake.shift();
    }
    if (head[0] < 0) {
      head[0] = head[0] + 100;
      snake.shift();
    }
    if (head[1] < 0) {
      head[1] = head[1] + 100;
      snake.shift();
    }
  }

  function checkIfCollapsed() {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        onGameOver();
      }
    });
  }

  let score = 0;

  function enlargeSnake() {
    let newSnake = [...snakeDots];
    // let newScore = score;
    let newCountFeed = count;
    newCountFeed += 1;
    score =
      newCountFeed === 1
        ? score + 1
        : newCountFeed === 2
        ? score + 5
        : score + 10;
    newSnake.unshift([]);
    setSnakeDots(newSnake);
    setCount(newCountFeed);
    // setScore(newScore)
    onChangeScore(id, score)
    return score;
  }

  function checkIfEat() {
    let head = snakeDots[snakeDots.length - 1];
    let snakeFood = food;
    if (head[0] === snakeFood[0] && head[1] === snakeFood[1]) {
      enlargeSnake();
      setFood(getRandomCoordinates());
      setSpeed(increaseSpeed(speed, score));
    }
  }

  function onGameOver() {
    // setAlive(false);
    setSnakeDots([
      [0, 0],
      [4, 0],
    ]);
    setSpeed(100);
    // setScore(0);
    setCount(0);
    setDirection(RIGHT);
    setGrid(getEmptyRows());
  }

  // function rePlay() {
  //     setAlive(true);
  // 	setDirection('RIGHT');
  // 	setName('Play again');
  // 	setScore(0);
  // }

  return (
    <>
      <SnakeBox>
        {grid.map(row => row.map((column, j) => <SnakeGrid key={j} />))}
        <SnakeBody snakeDots={snakeDots} />
        <SnakeFood dot={food} />
      </SnakeBox>
    </>
  );
}

SnakeHooks.propTypes = {
  id: PropTypes.string,
  onChangeScore: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onChangeScore: (id, score) => dispatch(changeScore(id, score))
})

export default connect(null, mapDispatchToProps)(SnakeHooks)
