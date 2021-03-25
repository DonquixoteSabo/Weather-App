import React from 'react';

import HightlightWrapper from 'components/atoms/HightlightWrapper';
import Title from 'components/atoms/Title';
import HightlightContent from 'components/atoms/HightlightContent';

function Visibility({ miles }) {
  return (
    <HightlightWrapper>
      <Title>Visibility</Title>
      <HightlightContent>
        {miles.replace('.', ',')}
        <span>miles</span>
      </HightlightContent>
    </HightlightWrapper>
  );
}

export default Visibility;
