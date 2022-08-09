import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',

})
export class ByCountryComponent {

  countries: Country[] = [];

  term: string = '';
  isError: boolean = false;

  constructor(private countryService: CountryService) { }

  search(term: string) {

    this.isError = false;
    this.term = term;

    this.countryService.searchCountry(this.term)
    .subscribe({
      next: (countries) => {
       this.countries = countries;
      },
      error: (err) => {
        if (err.status === 404) {
          this.isError = true;
          this.countries = [];
        }
      },
    });
  }

  suggestions(term: string){
    this.isError = false;
  }
}
