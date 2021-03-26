import Cart from 'components/molecules/Cart';
import unitChanger from 'helpers/unitChanger';
import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from './styles';

function Carts({ weather, unit }) {
  const weatherList = weather.slice(1);
  return (
    <Wrapper>
      {weatherList.map((w, i) => (
        <Cart
          abbr={w.abbr}
          date={w.date}
          minTemp={unitChanger(unit, w.minTemp)}
          maxTemp={unitChanger(unit, w.maxTemp)}
          isTomorrow={i === 0 ? true : false}
          key={w.date}
          stateName={w.stateName}
        />
      ))}
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
    unit: state.unit,
  };
};
export default connect(mapStateToProps)(Carts);
