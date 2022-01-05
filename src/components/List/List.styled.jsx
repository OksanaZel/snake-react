import styled from "@emotion/styled";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const TabContainer = styled(TableContainer)`
width: 300px;
`;

export const Title = styled.h2`
text-align: center;
`;

export const Tab = styled(Table)`
`;

export const TabHead = styled(TableHead)`
  text-transform: uppercase;
`;

export const TabRow = styled(TableRow)`
  font-size: 18px;

`;

export const TabCell = styled(TableCell)`
  text-align: left;
`;

export const TabBody = styled(TableBody)`
`;
