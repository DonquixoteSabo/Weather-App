import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import { changeUnit } from 'weatherProvider/actions';
import { Wrapper, Circle } from './styles';

function UnitHandler({ changeUnit }) {
  const [active, setActive] = useState('celsius');
  const handleClick = unit => {
    changeUnit(unit);
    if (unit === 'celsius') {
      setActive('celsius');
    }
    if (unit === 'fahrenheit') {
      setActive('fahrenheit');
    }
  };
  return (
    <Wrapper>
      <Circle
        isActive={active === 'celsius'}
        onClick={() => handleClick('celsius')}
      >
        ℃
      </Circle>
      <Circle
        isActive={active === 'fahrenheit'}
        onClick={() => handleClick('fahrenheit')}
      >
        ℉
      </Circle>
    </Wrapper>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    changeUnit: unit => dispatch(changeUnit(unit)),
  };
};
export default connect(null, mapDispatchToProps)(UnitHandler);
