import styled from 'styled-components';

const BigContainer = styled.div`
  flex-grow: 1;
  background-color: ${props => props.theme.colors.vulcan};
  min-height: 100%;
  padding: 50px 0;
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding: 100px 80px;
  }
`;

export default BigContainer;
