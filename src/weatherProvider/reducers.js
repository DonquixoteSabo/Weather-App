import * as types from './types';

//just change celsius to fahrenheit and we will get new value :D;
const initialState = {
  unit: 'celsius',
  weather: [
    {
      temperature: '',
      minTemp: 0,
      maxTemp: 0,
      stateName: '',
      date: '',
      location: '',
      abbr: '',
      wind: 0,
      windDirection: 0,
      himidity: '0%',
      visibility: '0',
      airPressure: 0,
    },
  ],
  woeidCode: '2487956',
  loading: true,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    case types.SET_WOEID_CODE:
      return {
        ...state,
        woeidCode: action.payload.woeid,
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.SET_LOADED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
