import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss']
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  countries: Country[] = [];
  activatedRegion: string = '';

  constructor(private countryService: CountryService) { }

  activateRegion(region: string): void {
    this.activatedRegion = region;

    //TODO: Call the service
  }

  getCssClass(region: string): string {
    return (region === this.activatedRegion) ? 'btn btn-primary btn-sm' : 'btn btn-outline-secondary btn-sm';
  }

  searchByRegion(region: string): void {
    this.countryService.searchByRegion(region)
      .subscribe(countries => this.countries = countries)
  }

}
