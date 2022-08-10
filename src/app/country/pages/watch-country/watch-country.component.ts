import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-watch-country',
  templateUrl: './watch-country.component.html',
})
export class WatchCountryComponent implements OnInit {

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
        switchMap(({id})=> this.countryService.getCountryById(id))
      )
      // From here is like any other Observable
      .subscribe(country => {
        console.log(country);
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
