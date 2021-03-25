import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.s};
  text-align: center;
  color: ${props => props.theme.colors.santasGray};
  span {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>
        created by <span>Donquixote Sabo</span> - devChallenges.io
      </p>
    </StyledFooter>
  );
}

export default Footer;
