import styled from "@emotion/styled/macro";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  max-width: 400px;
  margin-right: 15px;
  font-size: 18px;
`;

export const Input = styled.input`
  border: 1px solid #161D2A;
  border-radius: 4px;
  margin-left: 15px;
  padding: 5px;
  font-size: 16px;
  &:focus {
    outline: none;
    border: 1px solid #FF751D;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  padding: 2px 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: #FF751D;
`;
