// import "./App.styled.jsx";
import React from "react";
// import Snake from 'react-simple-snake'
// import Snake from "../Snake/Snake";
import SnakeHooks from "../Snake/SnakeHooks";
// import SnakeGrid from "../Snake/SnakeGrid";
// import { Container } from "./App.styled";
import UserForm from "../Form/Form";
import List from "../List/List";

function App() {
  return (
    <>
      <UserForm />
      <List />
      {/* <Snake /> */}
      <SnakeHooks />
    </>
  );
}

export default App;
