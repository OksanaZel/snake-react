import React from "react";
import UserForm from "../UserForm";
import Snake from "../Snake/Snake"
import List from "../List";
import { Container, SnakeContainer } from "./App.styled";

export default function App() {
  return (
      <Container>
        <UserForm/>
        <SnakeContainer>
          <Snake/>
          <List/>
        </SnakeContainer>
      </Container>
  );
}
