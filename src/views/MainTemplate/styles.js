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

export const BigContainer = styled.div`
  flex-grow: 1;
  background-color: ${props => props.theme.colors.vulcan};
  min-height: 100%;
  padding: 50px 0;
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding: 100px 80px;
  }
`;
