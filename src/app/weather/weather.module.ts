import { NgModule } from '@angular/core';

import { WeatherComponent } from './weather.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherStoreModule } from './store/store.module';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    WeatherStoreModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [],
})
export class WeatherModule { }
