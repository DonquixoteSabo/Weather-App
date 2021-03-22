import React, { useState } from 'react';
import HeaderContainer from 'components/atoms/HeaderContainer';
import SearchIcon from '@material-ui/icons/Search';
import {
  Wrapper,
  StyledCloseIcon,
  StyledInput,
  StyledButton,
  StyledUl,
  StyledLi,
} from './styles';
import { connect } from 'react-redux';
import { setWoeidCodeAction } from 'weatherProvider/actions';
import axios from 'axios';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Search({ handleActiveChange: handleCloseMenu, setWoeidCode }) {
  const [inputValue, setInputValue] = useState('');
  const [searchedPlaces, setSearchedPlaces] = useState([]);
  const searchPlaces = async () => {
    const response = await axios.get(
      `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${inputValue}`
    );
    const data = response.data;
    setSearchedPlaces(
      data.map(city => ({
        woeid: city.woeid,
        name: city.title,
      }))
    );
  };
  const handleSubmit = e => {
    e.preventDefault();
    searchPlaces();
  };
  const handleClick = woeid => {
    setWoeidCode(woeid);
    handleCloseMenu();
  };
  return (
    <HeaderContainer>
      <Wrapper>
        <StyledCloseIcon onClick={handleCloseMenu} />
        <form onSubmit={handleSubmit}>
          <div className='search'>
            <SearchIcon className='search__icon' />
            <StyledInput
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder='search location'
            />
          </div>
          <StyledButton type='submit'>Search</StyledButton>
        </form>
        <StyledUl>
          {searchedPlaces.map(city => (
            <StyledLi key={city.woeid} onClick={() => handleClick(city.woeid)}>
              {city.name}
              <ArrowForwardIosIcon className='arrow' />
            </StyledLi>
          ))}
        </StyledUl>
      </Wrapper>
    </HeaderContainer>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    setWoeidCode: woeid => dispatch(setWoeidCodeAction(woeid)),
  };
};
export default connect(null, mapDispatchToProps)(Search);
