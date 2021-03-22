import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  text-indent: 40px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.athensGray};
  color: inherit;
  font-size: ${props => props.theme.fontSize.l};
`;
export const StyledButton = styled.button`
  width: 25%;
  border: none;
  background-color: ${props => props.theme.colors.royalBlue};
  padding: 15px 5px;
  color: inherit;
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.l};
`;
