import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LocalizationIcon from 'components/atoms/LocalizationIcon';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Wrapper, Content, SearchButton } from './styles';
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
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [woeidCode]);

  useEffect(() => {
    const iconLink = getIcon(abbr);
    setIcon(iconLink);
  }, [abbr]);

  return (
    <HeaderContainer>
      <Wrapper>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
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
          </>
        )}
      </Wrapper>
    </HeaderContainer>
  );
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
