import React, { useState } from 'react';
import HeaderContainer from 'components/atoms/HeaderContainer';
import SearchIcon from '@material-ui/icons/Search';
import { Wrapper, StyledCloseIcon, StyledInput, StyledButton } from './styles';
import { connect } from 'react-redux';
import { setWoeidCodeAction } from 'weatherProvider/actions';

function Search({ handleActiveChange: handleCloseMenu, setWoeidCode }) {
  const [inputValue, setInputValue] = useState('');
  const [searchedPlaces, setSearchedPlaces] = useState([
    { name: 'london', woeid: '44418' },
  ]);
  const searchPlaces = async () => {};
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
        <ul>
          {searchedPlaces.map(city => (
            <li key={city.woeid} onClick={() => handleClick(city.woeid)}>
              {city.name}
            </li>
          ))}
        </ul>
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
