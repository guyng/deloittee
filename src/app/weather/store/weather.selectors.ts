import { createFeatureSelector, createSelector } from '@ngrx/store';
import { weatherFeatureKey, WeatherState } from './weather.reducers';

export const selectWeatherState = createFeatureSelector<WeatherState>(
    weatherFeatureKey
);

export const getCitiesWeather = createSelector(
    selectWeatherState,
    (state: WeatherState) => state.cityWeathers
);

export const getWeatherLoading = createSelector(
    selectWeatherState,
    (state: WeatherState) => state.loading
)
