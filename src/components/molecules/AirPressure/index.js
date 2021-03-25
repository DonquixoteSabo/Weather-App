import React from 'react';

import HightlightWrapper from 'components/atoms/HightlightWrapper';
import Title from 'components/atoms/Title';
import HightlightContent from 'components/atoms/HightlightContent';

function AirPressure({ pressure }) {
  return (
    <HightlightWrapper>
      <Title>Air Pressure</Title>
      <HightlightContent>
        {pressure}
        <span>mb</span>
      </HightlightContent>
    </HightlightWrapper>
  );
}

export default AirPressure;
