import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  WeatherData,
  Coord,
} from '../../../shared/interfaces/weather.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly API_URL = environment.openWeather.url;

  constructor(private readonly http: HttpClient) {}

  public getWeatherByName(city: string): Observable<WeatherData> {
    const params = new HttpParams().set('q', city);

    return this.http.get<WeatherData>(`${this.API_URL}/weather`, {
      params,
    });
  }

  public getWeatherByCoords(coords: Coord): Observable<WeatherData> {
    const params = new HttpParams()
      .set('lat', coords.latitude)
      .set('lon', coords.longitude);

    return this.http.get<WeatherData>(`${this.API_URL}/weather`, {
      params,
    });
  }
}
