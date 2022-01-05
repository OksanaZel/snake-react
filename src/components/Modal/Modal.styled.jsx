import styled from '@emotion/styled';

export const StyledBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  box-shadow: 0px 4px 10px #FF751D;
  padding: 40px;
  display:flex;
  flex-direction: column;
  align-items: center;
}
`;

export const StyledIconButton = styled.button`
position: absolute;
top: 8px;
right: 8px;
padding: 0;
border: none;
background-color: #fff;
cursor: pointer;
`;
