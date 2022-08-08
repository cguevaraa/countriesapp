import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',

})
export class ByCountryComponent {

  countries: Country[] = [];

  term: string = 'hello world';
  isError: boolean = false;

  constructor(private countryService: CountryService) { }

  search() {

    this.isError = false;

    this.countryService.searchCountry(this.term)
    .subscribe({
      next: (countries) => {
       this.countries = countries;
       console.log(countries[0]);
      },
      error: (err) => {
        // console.info(err.status);
        if (err.status === 404) {
          this.isError = true;
          this.countries = [];
        }
      },
    });
  }
}
