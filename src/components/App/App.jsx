// import "./App.styled.jsx";
import React, { useState } from "react";
import { nanoid } from "nanoid";
// import Snake from 'react-simple-snake'
// import Snake from "../Snake/Snake";
import SnakeHooks from "../Snake/SnakeHooks";
// import SnakeGrid from "../Snake/SnakeGrid";
import { Container, SnakeContainer } from "./App.styled";
import UserForm from "../UserForm/UserForm";
import List from "../List/List";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = ({ name }) => {

    const user = {
      id: nanoid(2),
      name,
      score: 0,
    }

      setUsers(prevUsers => [ user,...prevUsers])
  }

  return (
      <Container>
      <UserForm onSubmit={addUser}/>
    <SnakeContainer>
      <SnakeHooks />
      <List users={users} />
      </SnakeContainer>
      </Container>
  );
}

export default App;
