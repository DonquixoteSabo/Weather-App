import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
  }
`;
