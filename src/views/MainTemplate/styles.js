import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: row;
  }
`;
