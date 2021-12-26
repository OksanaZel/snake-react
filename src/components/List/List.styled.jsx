import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Table = styled.div`
  border-radius: 30px 30px 0px 0px;
`;

export const TableHead = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  font-size: 13px;
  font-weight: normal;
  color: #52555f;
`;

export const TableTitle = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: #000;
  padding: 0 8px;
  text-transform: uppercase;
`;

export const TableDate = styled.div`
  padding-left: 20px;
  font-size: 11px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
`;

export const TableList = styled.ul`
  margin: 0;
  padding: 0;
  &::-webkit-scrollbar {
    width: 6px;
    height: 0;
    overflow-x: scroll;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff751d;
    border-radius: 4px;
  }
`;
