import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LEFT, UP, RIGHT, DOWN, STOP } from "../utils/constants";
import { getEmptyRows } from "../utils/getEmptyRows";
import { getRandomCoordinates } from "../utils/getRandomCoordinates";
import { increaseSpeed } from "../utils/increaseSpeed";
import { SnakeBox, UserBox, Container, Title, Button, SnakeGrid, ModalButton, ModalText, ModalTitle, ModalButtonContainer } from "./Snake.styled";
import BasicModal from "../Modal";
import SnakeBody from "../SnakeBody";
import SnakeFood from "../SnakeFood";
import { userSelectors, usersOperations} from "../../redux";

export default function Snake() {
  const user = useSelector(userSelectors.getCurrentUser);
  const dispatch = useDispatch();

  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [4, 0],
  ]);
  const [food, setFood] = useState(getRandomCoordinates());
  const [speed, setSpeed] = useState(100);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0)
  const [alive, setAlive] = useState(false);
  const [direction, setDirection] = useState(RIGHT);
  const [grid, setGrid] = useState(getEmptyRows());
  const [isShowModal, setIsShowModal] = useState(false);
  const intervalId = useRef(null);
  
  useEffect(() => {
    window.onkeydown = onKeyDown;
    checkOutOfBorders();
    checkIfCollapsed();
    checkIfEat();

    intervalId.current = setInterval(() => {
      moveSnake(alive);
    }, speed);
    return () => clearInterval(intervalId.current);
  });

  useEffect(() => {
    dispatch(usersOperations.fetchAllUsers());
  }, [dispatch]);

  function onHandleClick() {
    setAlive(true)
  }

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

  function moveSnake(alive) {
    if (alive){
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
    }
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
        setIsShowModal(true)
      }
    });
  }

  function enlargeSnake() {
    let newSnake = [...snakeDots];
    let newScore = score;
    let newCountFeed = count;
    newCountFeed += 1;
    newScore =
      newCountFeed === 1
        ? newScore + 1
        : newCountFeed === 2
        ? newScore + 5
        : newScore + 10;
    newSnake.unshift([]);
    setSnakeDots(newSnake);
    setCount(newCountFeed);
    setScore(newScore);
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

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
    setScore(0);
  }

  const onBtnNoClick = () => {
    dispatch(usersOperations.createUser({ name: user.name, score: score }));
    setIsShowModal(!isShowModal);
    window.location.reload()
  }

  function onGameOver() {
    setAlive(false);
    setSnakeDots([
      [0, 0],
      [4, 0],
    ]);
    setSpeed(100);
    setCount(0);
    setDirection(RIGHT);
    setGrid(getEmptyRows());
  }

  return (
    <Container>
        <UserBox>
          <ModalTitle>{user.name} Score: {score}</ModalTitle>
          <Button type="button" onClick={onHandleClick}>Play</Button>
        </UserBox>
        <SnakeBox>
          {grid.map(row => row.map((column, j) => <SnakeGrid key={j} />))}
            <SnakeBody snakeDots={snakeDots} />
            <SnakeFood dot={food} />
        </SnakeBox>
        <BasicModal open={isShowModal} onClick={toggleModal} onClose={toggleModal}>
          <Title>Game over</Title>
          <ModalText>Play again?</ModalText>
          <ModalButtonContainer>
            <ModalButton type="button" onClick={toggleModal}>Yes</ModalButton>
          {/* <ModalButton type="button" onClick={() => dispatch(usersOperations.createUser({name:user.name, score: score}))}>No</ModalButton> */}
          <ModalButton type="button" onClick={onBtnNoClick}>No</ModalButton>
          
        </ModalButtonContainer>
        </BasicModal>
      </Container>
  );
}
