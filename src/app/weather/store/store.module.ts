import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { WeatherReducer } from './weather.reducers';
import { WeatherEffects } from './weather.effects';
import { WeatherService } from '../services/weather.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        StoreModule.forFeature('weather', WeatherReducer),
        EffectsModule.forFeature([WeatherEffects]),
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        HttpClientModule
    ],
    providers: [WeatherService]
})
export class WeatherStoreModule {
}
