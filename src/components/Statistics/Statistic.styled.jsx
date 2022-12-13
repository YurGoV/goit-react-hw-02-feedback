import styled from '@emotion/styled';

export const Statistic = styled.p`
  font-size: 18px;
`;

export const Positive = styled.p`
  font-size: 18px;
  color: ${props => props.data > 0 && 'green'};
  font-style: ${props => props.data > 50 && 'italic'};
`;
