import React from 'react';
import { connect } from 'react-redux';

import LocalizationIcon from 'components/atoms/LocalizationIcon';
import SearchButton from 'components/atoms/SearchButton';

import icon from 'assets/images/Clear.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { MainContainer, Wrapper, Content } from './styles';
import unitChanger from 'helpers/unitChanger';

function BigCart({
  unit,
  weather: { temperature, stateName, date, location },
}) {
  const formattedTemperature = unitChanger(unit, temperature);

  return (
    <MainContainer>
      <Wrapper>
        <div>
          <SearchButton>Search for places</SearchButton>
          <LocalizationIcon />
        </div>
        <div className='imgContainer'>
          <img src={icon} alt='siema' />
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
    </MainContainer>
  );
}
const mapStateToProps = state => {
  return {
    weather: state.mainWeather,
    unit: state.unit,
  };
};
export default connect(mapStateToProps)(BigCart);
