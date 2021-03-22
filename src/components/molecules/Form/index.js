import React from 'react';
import { StyledInput, StyledButton } from './styles';
import SearchIcon from '@material-ui/icons/Search';

function Form({ handleSubmit, handleChange, inputValue }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='search'>
        <SearchIcon className='search__icon' />
        <StyledInput
          value={inputValue}
          onChange={handleChange}
          placeholder='search location'
        />
      </div>
      <StyledButton type='submit'>Search</StyledButton>
    </form>
  );
}

export default Form;
