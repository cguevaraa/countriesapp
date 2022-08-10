import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>(url);
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url);
  }

  getCountryById(id: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url);
  }

}
