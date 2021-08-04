export class CityWeather {
    weather?: WeatherSkies[];
    main?: MainWeather;
    wind?: Wind;
    name?: string;
}

export class WeatherSkies {
    main?: string;
    name?: string;
    description?: string;
}

export class MainWeather {
    temp?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
    sea_level?: number;
}

export class Wind {
    speed?: number;
    deg?: number;
}