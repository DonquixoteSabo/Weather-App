import * as types from './types';
import dateFormat from 'dateformat';

//just change celsius to fahrenheit and we will get new value :D;
const now = new Date();

const initialState = {
  unit: 'celsius',
  mainWeather: {
    temperature: 15,
    stateName: 'Shower',
    date: dateFormat(now, 'ddd, mmm dS'),
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
