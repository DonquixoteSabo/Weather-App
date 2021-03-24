import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';

import { Wrapper } from './styles';
import Wind from 'components/molecules/Wind';

function Hightlight({ weather }) {
  console.log(weather);
  const todaysWeather = weather[0];

  return (
    <Wrapper>
      <Wind
        wind={todaysWeather.wind}
        windDirection={todaysWeather.windDirection}
      />
    </Wrapper>
  );
}
const mapStateToProps = state => {
  return {
    weather: state.weather,
  };
};
export default connect(mapStateToProps)(Hightlight);
