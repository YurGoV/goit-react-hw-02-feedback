import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  //flex-wrap: wrap;
  flex-direction: column;
  padding: 90px;
  justify-content: left;
  align-items: flex-start;
  color: #010101
`;

export const Stat = styled.h2`
  font-size: 22px;
  //font-weight: bold;
  font-weight: ${props => props.isData > 0 ? 'bold' : 'normal' };
`;
