import React from 'react';
import { connect } from 'react-redux';

import { changeUnit } from 'weatherProvider/actions';
import { Wrapper, Circle } from './styles';

function UnitHandler({ changeUnit }) {
  return (
    <Wrapper>
      <Circle isWhite onClick={() => changeUnit('celsius')}>
        ℃
      </Circle>
      <Circle onClick={() => changeUnit('fahrenheit')}>℉</Circle>
    </Wrapper>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    changeUnit: unit => dispatch(changeUnit(unit)),
  };
};
export default connect(null, mapDispatchToProps)(UnitHandler);
