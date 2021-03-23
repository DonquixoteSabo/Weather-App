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
import getIcon from 'helpers/getIcon';

function BigCart({
  unit,
  weather,
  fetchTodaysWeather,
  handleActiveChange,
  woeidCode,
  setLoaded,
  setLoading,
  loading,
}) {
  const { temperature, stateName, date, location, abbr } = weather[0];
  const formattedTemperature = unitChanger(unit, temperature);
  const [icon, setIcon] = useState('');
  useEffect(() => {
    setLoading();
    const fetchData = async () => {
      await fetchTodaysWeather(woeidCode);
      setLoaded();
      const iconLink = getIcon(abbr);
      setIcon(iconLink);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [woeidCode]);
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
    weather: state.weather,
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
