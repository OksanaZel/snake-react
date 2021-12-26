import React from "react";
import { nanoid } from "nanoid";
import { HEIGHT, WIDTH } from "../utils/constants";
import { Container, Grid, GridItem } from "./SnakeGrid.styled";

function SnakeGrid() {
  const empty = [...Array(HEIGHT)].map(() => [...Array(WIDTH)]);
  return (
    <Container>
      <Grid>
        {empty.map(row => row.map(() => <GridItem key={nanoid(3)}></GridItem>))}
      </Grid>
    </Container>
  );
}

export default SnakeGrid;
