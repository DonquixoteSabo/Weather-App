import * as types from './types';
import dateFormat from 'dateformat';
import axios from 'axios';

const now = new Date();

export const fetchTodaysWeatherAction = woeid => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${woeid}`
    );
    const data = response.data;

    const weather = data.consolidated_weather[0];

    dispatch({
      type: types.FETCH_TODAYS_WEATHER,
      payload: {
        temperature: weather.the_temp.toFixed(2),
        stateName: weather.weather_state_name,
        date: dateFormat(now, 'ddd, mmm dS'),
        location: data.title,
        abbr: weather.weather_state_abbr,
      },
    });
  };
};

export const setWoeidCodeAction = woeid => {
  return {
    type: types.SET_WOEID_CODE,
    payload: {
      woeid,
    },
  };
};
export const setLoading = () => {
  return {
    type: types.SET_LOADING,
  };
};
export const setLoaded = () => {
  return {
    type: types.SET_LOADED,
  };
};

// `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${query}` Using query for search
