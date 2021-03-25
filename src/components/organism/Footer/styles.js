import styled from 'styled-components';

export const StyledFooter = styled.footer`
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.s};
  color: ${props => props.theme.colors.santasGray};
  text-align: center;
  /* position: absolute;
  left: 50%:
  bottom: 10%; */
  span {
    text-decoration: underline;
  }
`;
