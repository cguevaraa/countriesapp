import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
})
export class ShowCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    ) { }

  ngOnInit(): void {
    // This returns an Observable
    this.activatedRoute.params
      .pipe(
        // With switchMap we can "switch" the Observable for a new one:
        // the one returned by the service
        switchMap(({id})=> this.countryService.getCountryById(id)),
        tap(console.log)
      )
      // From here is like any other Observable
      .subscribe(country => {
        this.country = country[0]
        console.log(country.name.common)
      })

    // Alternative without rxjs' switchMap:
    // this.activatedRoute.params
    // .subscribe(({id}) => {
    //   console.log(id);

    //   this.countryService.getCountryById(id)
    //     .subscribe(country => {
    //       console.log(country);
    //     });
    // });
  }

}
