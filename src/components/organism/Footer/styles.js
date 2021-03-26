import styled from 'styled-components';

export const StyledFooter = styled.footer`
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.s};
  text-align: center;
  color: ${props => props.theme.colors.santasGray};
  span {
    text-decoration: underline;
  }
`;
