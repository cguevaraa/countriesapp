import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams()
    .set('fields', 'name,capital,altSpellings,flags,flag,cca2,population')
  }

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  searchByRegion(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${term}`
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getCountryById(id: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url);
  }

}
