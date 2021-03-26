import React from 'react';

import HightlightWrapper from 'components/atoms/HightlightWrapper';
import Title from 'components/atoms/Title';
import HightlightContent from 'components/atoms/HightlightContent';
import Compass from 'components/atoms/Compass';

function Wind({ wind, windDirection, windDirectionCompass }) {
  return (
    <HightlightWrapper>
      <Title>Wind status</Title>
      <HightlightContent>
        {wind}
        <span>mph</span>
      </HightlightContent>
      <Compass
        windDirection={windDirection}
        windDirectionCompass={windDirectionCompass}
      />
    </HightlightWrapper>
  );
}

export default Wind;
