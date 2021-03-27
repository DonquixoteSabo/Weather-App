import React from 'react';

import { StyledFooter } from './styles';

function Footer() {
  return (
    <StyledFooter>
      <p>
        created by{' '}
        <a href='https://github.com/DonquixoteSabo' rel='external'>
          Donquixote Sabo
        </a>{' '}
        - devChallenges.io
      </p>
    </StyledFooter>
  );
}

export default Footer;
