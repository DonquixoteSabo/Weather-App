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

    console.log(data);
    const weather = data.consolidated_weather[0];

    dispatch({
      type: types.FETCH_TODAYS_WEATHER,
      payload: {
        temperature: weather.the_temp,
        stateName: weather.weather_state_name,
        date: dateFormat(now, 'ddd, mmm dS'),
        location: weather.title,
        abbr: weather.weather_state_abbr,
      },
    });
  };
};

// `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${query}` Using query for search
