import * as types from './types';
// import dateFormat from 'dateformat';
import axios from 'axios';

// const now = new Date();

export const fetchTodaysWeatherAction = woeid => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${woeid}`
    );
    const data = response.data;

    const weatherList = data.consolidated_weather.map(weather => ({
      temperature: weather.the_temp.toFixed(2),
      minTemp: weather.min_temp.toFixed(),
      maxTemp: weather.max_temp.toFixed(),
      stateName: weather.weather_state_name,
      date: weather.applicable_date,
      location: data.title,
      abbr: weather.weather_state_abbr,
      wind: weather.wind_speed.toFixed(),
      windDirection: weather.wind_direction,
      windDirectionCompass: weather.wind_direction_compass,
      himidity: weather.humidity,
      visibility: weather.visibility.toFixed(1),
      airPressure: weather.air_pressure.toFixed(),
    }));
    dispatch({
      type: types.FETCH_WEATHER,
      payload: weatherList,
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
export const changeUnit = unit => {
  return {
    type: types.CHANGE_UNIT,
    payload: unit,
  };
};
