import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Country {
  countryCode: string;
  name: string;
}

export interface Holiday {
  date: string;
  name: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiBaseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiBaseUrl}/AvailableCountries`);
  }

  getHolidays(year: number, countryCode: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`${this.apiBaseUrl}/PublicHolidays/${year}/${countryCode}`);
  }

  getNextHolidays(countryCode: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`${this.apiBaseUrl}/NextPublicHolidays/${countryCode}`);
  }
}