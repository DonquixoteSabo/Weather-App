import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeUnit } from 'weatherProvider/actions';

const Wrapper = styled.div`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isWhite ? props.theme.colors.athensGray : '#110E3C'};
  color: ${props =>
    props.isWhite ? '#110E3C' : props.theme.colors.athensGray};
  border-radius: 50px;
  font-size: ${props => props.theme.fontSize.m};
  font-weight: bold;
`;
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
