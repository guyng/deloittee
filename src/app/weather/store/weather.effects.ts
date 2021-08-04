import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { WeatherService } from '../services/weather.service';
import { loadCityWeather, loadCityWeatherFailure, loadCityWeatherSuccess } from './weather.actions';


@Injectable()
export class WeatherEffects {

    loadCityWeather$ = createEffect(() => {
        return this.actions$.pipe(

            ofType(loadCityWeather),
            switchMap((action) =>
                this.weatherService.getCityWeather(action.city)
                    .pipe(map(data => loadCityWeatherSuccess({ cityWeather: data })),
                        catchError(error => of(loadCityWeatherFailure({ error })))))

        );
    });

    constructor(private actions$: Actions, private weatherService: WeatherService) { }

}
