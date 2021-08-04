import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CityWeather } from "../models/city-weather.model";

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) {
    }

    public getCityWeather(cityName: string) {
        return this.http.get<CityWeather>("https://api.openweathermap.org/data/2.5/weather?q="
            + cityName + "&appid=fa9b9a8f291b031ce2e53906f4af09a3");
    }
}