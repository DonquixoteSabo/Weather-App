import styled from 'styled-components';

const SearchButton = styled.button`
  width: 161px;
  height: 40px;
  background-color: ${props => props.theme.colors.stormGray};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.m};
  color: ${props => props.theme.colors.athensGray};
`;

export default SearchButton;
