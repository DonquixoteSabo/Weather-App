import React from 'react';

import HightlightWrapper from 'components/atoms/HightlightWrapper';
import Title from 'components/atoms/Title';
import HightlightContent from 'components/atoms/HightlightContent';
import Compass from 'components/atoms/Compass';

function Wind({ wind, windDirection }) {
  return (
    <HightlightWrapper>
      <Title>Wind status</Title>
      <HightlightContent>
        {wind}
        <span>mph</span>
      </HightlightContent>
      <Compass windDirection={windDirection} />
    </HightlightWrapper>
  );
}

export default Wind;
