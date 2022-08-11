import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',

})
export class ByCountryComponent {

  countries: Country[] = [];
  suggestions: Country[] = [];

  term: string = '';
  isError: boolean = false;

  placeholder: string = 'Search country...';

  constructor(private countryService: CountryService) { }

  search(term: string) {

    this.suggestions = [];
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

  getSuggestions(term: string){
    console.log('debounce.', term);
    this.isError = false;
    this.countryService.searchCountry(term)
      .subscribe({
        next:  countries => this.suggestions = countries.splice(0,5),
        error: () => this.suggestions = [],
        complete: () => {return;}
      });
      
  }
}
