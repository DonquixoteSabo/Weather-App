import React from 'react';

import HightlightWrapper from 'components/atoms/HightlightWrapper';
import Title from 'components/atoms/Title';
import HightlightContent from 'components/atoms/HightlightContent';
import Chart from 'components/atoms/Chart';

function Humidity({ percent }) {
  return (
    <HightlightWrapper>
      <Title>Humidity</Title>
      <HightlightContent>
        {percent}
        <span>%</span>
      </HightlightContent>
      <Chart percent={percent} />
    </HightlightWrapper>
  );
}

export default Humidity;
