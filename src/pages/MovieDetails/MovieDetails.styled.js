import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 15px;
`;

export const Box = styled.div`
  padding: 10px;
`;

export const InfoBox = styled.div`
  margin-left: 20px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const Info = styled.b`
  margin-right: 20px;
`;

export const Title = styled.h1`
  color: red;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
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

export const MovieCard = styled.div`
  padding: 5px;
`;
