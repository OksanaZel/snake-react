// import "./App.styled.jsx";
import React from "react";
import PropTypes from "prop-types";
import SnakeHooks from "../Snake/SnakeHooks";
import { Container, SnakeContainer } from "./App.styled";
import UserForm from "../UserForm/UserForm";
import List from "../List/List";
import {connect} from "react-redux"

function App({ users }) {

  const [id] = users.map((user) => user.id);
  // console.log(id)
  
  // const [users, setUsers] = useState([]);

  // const addUser = ({ name }) => {

  //   const user = {
  //     id: nanoid(2),
  //     name,
  //     score: 0,
  //   }

  //     setUsers(prevUsers => [ user,...prevUsers])
  // }

  return (
      <Container>
      <UserForm/>
    <SnakeContainer>
        <SnakeHooks id={id}/>
      <List users={users} />
      </SnakeContainer>
      </Container>
  );
}

App.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    score:PropTypes.number,
  }),),
};

const mapStateToProps = state => ({
  users: state.users,
})

export default connect(mapStateToProps)(App);
