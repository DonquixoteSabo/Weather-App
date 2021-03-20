import * as types from './types';

const initialState = {
  mainWeather: {
    temperature: 15,
    stateName: 'Shower',
    date: 'Fri, 5 Jun',
    location: 'Helsinki',
  },
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK:
      console.log('ale ze to dziala to kox');
      return state;

    default:
      return state;
  }
};

export default weatherReducer;
