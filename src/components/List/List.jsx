import React from "react";
import db from "../../db/db.json";
import { Main, Table, TableHead, TableTitle, TableList } from "./List.styled";

function List() {
  return (
    <Main>
      <Table>
        <TableHead>
          <TableTitle>Name</TableTitle>
          <TableTitle>Score</TableTitle>
        </TableHead>

        {
          <TableList>
            {db.map(({ id, user, score }) => (
              <li key={id}>
                {user}
                {score}
              </li>
            ))}
          </TableList>
        }
      </Table>
    </Main>
  );
}

export default List;
