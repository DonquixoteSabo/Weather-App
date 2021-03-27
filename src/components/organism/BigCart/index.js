import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import unitChanger from 'helpers/unitChanger';
import getIcon from 'helpers/getIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import HeaderContainer from 'components/atoms/HeaderContainer';
import LocalizationIcon from 'components/atoms/LocalizationIcon';
import { Wrapper, Content, SearchButton } from './styles';

import {
  fetchTodaysWeatherAction,
  setLoaded,
  setLoading,
} from 'weatherProvider/actions';

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
              <SearchButton onClick={handleActiveChange} type='button'>
                Search for places
              </SearchButton>
              <LocalizationIcon />
            </div>
            <div className='imgContainer'>
              <img src={icon} alt='weather icon' />
            </div>
            <Content>
              <li className='temperature'>{formattedTemperature}</li>
              <li className='state-name'>{stateName}</li>
              <li>
                <div className='date'>
                  <p>Today</p>
                  <FiberManualRecordIcon className='icon' />
                  <time datetime={date}>{date}</time>
                </div>
                <li className='location'>
                  <LocationOnIcon />
                  <address>{location}</address>
                </li>
              </li>
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
