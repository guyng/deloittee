import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityWeather } from '../models/city-weather.model';
import { loadCityWeather, removeCityWeather } from '../store/weather.actions';
import { WeatherState } from '../store/weather.reducers';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input()
  cityWeather?: CityWeather;

  constructor(private store_weather: Store<WeatherState>) { }

  ngOnInit(): void {
  }

  updateWeatherCard(){
    this.store_weather.dispatch(loadCityWeather({city: this.cityWeather?.name ?? ""}))
  }

  removeWeatherCard(){
    this.store_weather.dispatch(removeCityWeather({city: this.cityWeather?.name ?? ""}))
  }

}
