import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LocalizationIcon from 'components/atoms/LocalizationIcon';
import SearchButton from 'components/atoms/SearchButton';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Wrapper, Content } from './styles';
import unitChanger from 'helpers/unitChanger';
import {
  fetchTodaysWeatherAction,
  setLoaded,
  setLoading,
} from 'weatherProvider/actions';
import { useState } from 'react';
import HeaderContainer from 'components/atoms/HeaderContainer';

function BigCart({
  unit,
  weather: { temperature, stateName, date, location, abbr },
  fetchTodaysWeather,
  handleActiveChange,
  woeidCode,
  setLoaded,
  setLoading,
  loading,
}) {
  const formattedTemperature = unitChanger(unit, temperature);
  const [icon, setIcon] = useState('');
  useEffect(() => {
    setLoading();
    const fetchData = async () => {
      await fetchTodaysWeather(woeidCode);
      setLoaded();
      if (abbr === 'sn') return setIcon('https://i.imgur.com/ynNolNA.png');
      if (abbr === 'sl') return setIcon('https://i.imgur.com/aGa7q5P.png');
      if (abbr === 'h') return setIcon('https://i.imgur.com/AdU6T7E.png');
      if (abbr === 't') return setIcon('https://i.imgur.com/miA4QXM.png');
      if (abbr === 'hr') return setIcon('https://i.imgur.com/EMIwgdn.png');
      if (abbr === 'lr') return setIcon('https://i.imgur.com/jvjCECS.png');
      if (abbr === 's') return setIcon('https://i.imgur.com/3MjYZsu.png');
      if (abbr === 'lc') return setIcon('https://i.imgur.com/iFIMX0a.png');
      if (abbr === 'hc') return setIcon('https://i.imgur.com/dkbS6r0.png');
      if (abbr === 'c') return setIcon('https://i.imgur.com/n6JZJTN.png');
      return setIcon('https://i.imgur.com/aGa7q5P.png');
    };
    fetchData();
  }, [fetchTodaysWeather, abbr, woeidCode, setLoaded, setLoading]);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <HeaderContainer>
        <Wrapper>
          <div>
            <SearchButton onClick={handleActiveChange}>
              Search for places
            </SearchButton>
            <LocalizationIcon />
          </div>
          <div className='imgContainer'>
            <img src={icon} alt='weather icon' />
          </div>
          <Content>
            <p className='temperature'>{formattedTemperature}</p>
            <p className='state-name'>{stateName}</p>
            <div>
              <div className='date'>
                <p>Today</p>
                <FiberManualRecordIcon className='icon' />
                <p>{date}</p>
              </div>
              <div className='location'>
                <LocationOnIcon />
                <p>{location}</p>
              </div>
            </div>
          </Content>
        </Wrapper>
      </HeaderContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    weather: state.mainWeather,
    unit: state.unit,
    woeidCode: state.woeidCode,
    loading: state.loading,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchTodaysWeather: woeid => dispatch(fetchTodaysWeatherAction(woeid)),
    setLoading: () => dispatch(setLoading()),
    setLoaded: () => dispatch(setLoaded()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BigCart);
