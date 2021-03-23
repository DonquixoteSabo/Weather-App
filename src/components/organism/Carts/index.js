import Cart from 'components/molecules/Cart';
import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from './styles';

function Carts({ weather, woeidCode }) {
  //Deleting the first element in array
  const weatherList = weather.slice(1);

  return (
    <Wrapper>
      {weatherList.map((w, i) => (
        <Cart
          abbr={w.abbr}
          date={w.date}
          minTemp={w.minTemp}
          maxTemp={w.maxTemp}
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
    woeidCode: state.woeidCode,
  };
};
export default connect(mapStateToProps)(Carts);
