import { createAction, props } from '@ngrx/store';
import { CityWeather } from '../models/city-weather.model';

export const loadCityWeather = createAction(
  '[Weather] Load Country Weather',
  props<{ city: string }>()
);

export const loadCityWeatherSuccess = createAction(
  '[Weather] Load Country Weather Success',
  props<{ cityWeather: CityWeather }>()
);

export const loadCityWeatherFailure = createAction(
  '[Weather] Load Country Weather Failure',
  props<{ error: any }>()
);

export const removeCityWeather = createAction(
  '[Weather] Remove Country Weather',
  props<{ city: string }>()
);