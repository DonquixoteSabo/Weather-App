import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';

import Wind from 'components/molecules/Wind';
import Humidity from 'components/molecules/Humidity';

import { Wrapper } from './styles';

function Hightlight({ weather }) {
  console.log(weather);
  const todaysWeather = weather[0];

  return (
    <Wrapper>
      <Wind
        wind={todaysWeather.wind}
        windDirection={todaysWeather.windDirection}
      />
      <Humidity percent={todaysWeather.himidity} />
    </Wrapper>
  );
}
const mapStateToProps = state => {
  return {
    weather: state.weather,
  };
};
export default connect(mapStateToProps)(Hightlight);
