import React from 'react';
import { ChartWrapper, Bar } from './styles';
function Chart({ percent }) {
  return (
    <ChartWrapper>
      <p>0</p>
      <p>50</p>
      <p>100</p>
      <p>%</p>
      <Bar percent={percent} />
    </ChartWrapper>
  );
}

export default Chart;
