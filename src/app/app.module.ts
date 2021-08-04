import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { WeatherModule } from './weather/weather.module';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather/weather-card/weather-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './interceptors/logging-interceptor';
import { ErrorInterceptor } from './interceptors/error-interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    WeatherModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
