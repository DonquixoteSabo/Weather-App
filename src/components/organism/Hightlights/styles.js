import styled from 'styled-components';

export const HightlightWrapper = styled.div`
  width: 350px;
  background-color: ${props => props.theme.colors.mirage};
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  color: ${props => props.theme.colors.athensGray};
`;
