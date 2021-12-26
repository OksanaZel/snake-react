import styled from "@emotion/styled/macro";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const Grid = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const GridItem = styled.div`
  outline: 1px solid grey;
  width: 30px;
  height: 30px;
`;
