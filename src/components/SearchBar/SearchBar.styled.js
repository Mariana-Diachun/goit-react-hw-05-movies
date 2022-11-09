import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
`;
export const Form = styled.form``;

export const Input = styled.input`
  box-sizing: border-box;
  width: 220px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  outline: none;
  &:hover,
  &:focus {
    border-color: red;
  }
  padding: 5px;
`;

export const Button = styled.button`
  border: none;
  margin-top: 30px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  &:hover,
  &:focus {
    border-color: red;
  }
  cursor: pointer;
  width: 100px;
`;
