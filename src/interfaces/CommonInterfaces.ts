export interface Temperature {
  min: number;
  max: number;
}

export interface WeatherObject {
  description: string;
  icon: string;
}

export interface WeatherAtMoment<T> {
  sunrise: number;
  sunset: number;
  temp: T;
  dt: number;
  pressure: number;
  humidity: number;
  wind_speed: number;
  weather: WeatherObject[];
}

export interface WeatherData{
  current: WeatherAtMoment<number>;
  daily: WeatherAtMoment<Temperature>[];
}