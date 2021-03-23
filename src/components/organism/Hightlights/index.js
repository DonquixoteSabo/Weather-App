import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { HightlightWrapper } from './styles';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

function Hightlight({ weather }) {
  console.log(weather);
  return (
    <Wrapper>
      <HightlightWrapper>Siemaa koxie</HightlightWrapper>
    </Wrapper>
  );
}
const mapStateToProps = state => {
  return {
    weather: state.weather,
  };
};
export default connect(mapStateToProps)(Hightlight);
