import React, {useEffect} from "react";
import { useSelector,  useDispatch } from "react-redux";
import { TabContainer, Tab, TabCell, TabHead, TabRow, TabBody } from "./List.styled";
import { userSelectors, usersOperations } from "../../redux";

function List() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersOperations.fetchAllUsers());
  }, [dispatch]);
  
  const users = useSelector(userSelectors.getUsers);

  return (
    <TabContainer>
      <h2>Records List</h2>
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
