import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.mirage};
  max-width: 600px;
`;

export default HeaderContainer;
