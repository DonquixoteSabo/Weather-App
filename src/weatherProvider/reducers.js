import * as types from './types';

//just change celsius to fahrenheit and we will get new value :D;
const initialState = {
  unit: 'celsius',
  mainWeather: {},
  woeidCode: '2487956',
};

// Search components will only change woeidCode after selecting one of searched value!!!

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODAYS_WEATHER:
      return {
        ...state,
        mainWeather: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
