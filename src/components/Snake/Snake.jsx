import React, { Component } from "react";
import SnakeBody from "./SnakeBody";
import SnakeFood from "./SnakeFood";
import { SnakeBox, SnakeGrid, ScoreContainer } from "./Snake.styled";
import { getRandomCoordinate } from "../utils/getRandomCoordinates";
import { getEmptyRows } from "components/utils/getEmptyRows";

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const STOP = 32;

const initialState = {
  food: getRandomCoordinate(),
  speed: 200,
  score: 0,
  countFeed: 0,
  direction: RIGHT,
  isGameOver: false,
  snakeDots: [
    [0, 0],
    [4, 0],
  ],
  grid: getEmptyRows(),
};

const increaseSpeed = (speed, score) =>
  speed - 50 * (speed > 50 && score > 7 && (score - 6) % 50 === 0);

export default class Snake extends Component {
  state = initialState;

  timeoutId = null;

  componentDidMount() {
    document.onkeydown = this.onKeyDown;
    this.gameLoop();
  }

  gameLoop = () => {
    this.timeoutId = setTimeout(() => {
      this.moveSnake();
      this.checkIfEat();
      this.checkIfCollapsed();
      this.gameLoop();
    }, this.state.speed);
  };

  componentWillUnmount() {
    clearInterval(this.timeoutId);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = e => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: UP });
        break;
      case 40:
        this.setState({ direction: DOWN });
        break;
      case 37:
        this.setState({ direction: LEFT });
        break;
      case 39:
        this.setState({ direction: RIGHT });
        break;
      case 32:
        this.setState({ direction: STOP });
        break;

      default:
        break;
    }
  };

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
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
    this.setState({ snakeDots: dots });
    this.checkOutOfBorders();
  };

  checkOutOfBorders = () => {
    let snake = [...this.state.snakeDots];
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
  };

  checkIfCollapsed = () => {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    });
  };

  checkIfEat = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      this.enlargeSnake();
      this.setState({
        food: getRandomCoordinate(),
        speed: increaseSpeed(this.state.speed, this.state.score),
      });
    }
  };

  enlargeSnake = () => {
    let newSnake = [...this.state.snakeDots];
    let newScore = this.state.score;
    let newCountFeed = this.state.countFeed;
    newCountFeed += 1;
    newScore =
      newCountFeed === 1
        ? newScore + 1
        : newCountFeed === 2
        ? newScore + 5
        : newScore + 10;
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
      countFeed: newCountFeed,
      score: newScore,
    });
  };

  onGameOver = () => {
    alert(`Game Over. Snake length is ${this.state.snakeDots.length}`);
    this.setState(initialState);
  };

  render() {
    return (
      <>
        <SnakeBox>
          {this.state.grid.map(row =>
            row.map((column, j) => <SnakeGrid key={j} />),
          )}
          <SnakeBody snakeDots={this.state.snakeDots} />
          <SnakeFood dot={this.state.food} />
        </SnakeBox>
        {/* <ScoreContainer>
          SCORE: {this.state.score} SPEED: {this.state.speed}
        </ScoreContainer> */}
      </>
    );
  }
}
