import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.mirage};
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const BigContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  background-color: ${props => props.theme.colors.vulcan};
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding: 100px 80px;
  }
  div.container {
    max-width: 800px;
  }
`;
