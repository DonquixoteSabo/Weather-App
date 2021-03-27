import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.mirage};
  color: ${props => props.theme.colors.athensGray};
  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }

  .imgContainer {
    margin-top: 30px;
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      max-width: 210px;
    }
  }
`;

export const Content = styled.ol`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: ${props => props.theme.fontSize.m};
  color: ${props => props.theme.colors.santasGray};
  .temperature {
    font-weight: 300;
    color: ${props => props.theme.colors.athensGray};
    font-size: ${props => props.theme.fontSize.xxl};
  }
  .state-name {
    font-size: ${props => props.theme.fontSize.xl};
    font-weight: 600;
  }
  .location {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .date {
    display: flex;
    align-items: center;
  }
  .icon {
    width: 10px;
    margin: 0 10px;
  }
`;

export const SearchButton = styled.button`
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
