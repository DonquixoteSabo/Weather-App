import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import NavigationIcon from '@material-ui/icons/Navigation';
import { HightlightWrapper } from './styles';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.l};
`;
const Content = styled.h2`
  font-weight: 700;
  font-size: 64px;
  margin: 10px;
  span {
    font-size: ${props => props.theme.fontSize.xl};
  }
`;
const Compass = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSize.m};
  font-weight: 500;
  div {
    width: 29.49px;
    height: 29.49px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(${props => props.degree}deg);
  }
  .icon {
    color: inherit;
    font-size: ${props => props.theme.fontSize.l};
  }
  span {
    margin: 20px 15px;
  }
`;

function Hightlight({ weather }) {
  console.log(weather);
  const todaysWeather = weather[0];

  return (
    <Wrapper>
      <HightlightWrapper>
        <Title>Wind status</Title>
        <Content>
          {todaysWeather.wind}
          <span>mph</span>
        </Content>
        <Compass degree={todaysWeather.windDirection}>
          <div>
            <NavigationIcon className='icon' />
          </div>
          <span>WSW</span>
        </Compass>
      </HightlightWrapper>
    </Wrapper>
  );
}
const mapStateToProps = state => {
  return {
    weather: state.weather,
  };
};
export default connect(mapStateToProps)(Hightlight);
