import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  color: ${props => props.theme.colors.athensGray};
  margin: 10px 0;
`;
