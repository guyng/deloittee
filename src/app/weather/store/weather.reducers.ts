import { Action, createReducer, on } from '@ngrx/store';
import { CityWeather } from '../models/city-weather.model';
import {
  loadCityWeather,
  loadCityWeatherFailure,
  loadCityWeatherSuccess,
  removeCityWeather,
} from './weather.actions';

export const weatherFeatureKey = 'weather';

export interface WeatherState {
  cityWeathers: CityWeather[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: WeatherState = {
  cityWeathers: [],
  loading: false,
  loaded: false,
};

export const WeatherReducer = createReducer(
  initialState,

  on(loadCityWeather, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(loadCityWeatherSuccess, (state, { cityWeather }) => {
    
    let cityWeathers = JSON.parse(
      JSON.stringify(state.cityWeathers)
    ) as CityWeather[];
    let exist = cityWeathers.find((cw) => cw.name === cityWeather.name);
    if (exist) {
      exist = cityWeather;
    } else {
      cityWeathers.push(cityWeather);
    }

    return {
      ...state,
      cityWeathers,
      loading: false,
      loaded: true,
    };
  }),
  on(loadCityWeatherFailure, (state, action) => ({
    ...state,
    loading: false,
    loaded: false,
  })),
  on(removeCityWeather, (state, { city }) => {
    let cityWeathers = JSON.parse(
      JSON.stringify(state.cityWeathers)
    ) as CityWeather[];
    cityWeathers = cityWeathers.filter((cw) => cw.name !== city);
    return {
      ...state,
      cityWeathers,
      loading: false,
      loaded: true,
    };
  })
);
