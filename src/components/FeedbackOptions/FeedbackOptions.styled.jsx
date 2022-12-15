import styled from '@emotion/styled';

export const ButtonsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 280px;
  margin: 10px 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 3px;
    font-weight: bold;
    height: 30px;
    min-width: 80px;
  }
`;
