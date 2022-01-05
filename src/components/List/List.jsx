import React, {useEffect} from "react";
import { useSelector,  useDispatch } from "react-redux";
import { Title, TabContainer, Tab, TabCell, TabHead, TabRow, TabBody } from "./List.styled";
import { userSelectors, usersOperations } from "../../redux";

function List() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersOperations.fetchAllUsers());
  }, [dispatch]);
  
  const users = useSelector(userSelectors.getUsers);

  return (
    <TabContainer>
      <Title>List of record holders</Title>
      <Tab>
        <TabHead>
          <TabRow>
            <TabCell>User name</TabCell>
            <TabCell>Score</TabCell>
          </TabRow>
        </TabHead>
        <TabBody>
          {users.length>0 && users.map(({id, name, score}) => (
            <TabRow
              key={id}
            >
              <TabCell>{name}</TabCell>
              <TabCell>{score}</TabCell>
            </TabRow>
          ))}
        </TabBody>
      </Tab>
    </TabContainer>
  );
}

export default List;
