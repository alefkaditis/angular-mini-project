import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/models';
import { ServicesService } from 'src/app/shared/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  public countries: Array<Country>;
  public countriesName: Array<string>;
  private routeParams: string;
  constructor(private service: ServicesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.service.getEuropeRegion().subscribe((data: Array<Country>) => {
      console.log(data);
      this.countries = data;
    });
  }

  fetchCountriesName(currency: string) {
    this.service.getCountriesName(currency).subscribe((data: Array<string>) => {
          console.log(data);
          this.countriesName = data;
        });
  }

  getCountriesName() {
    return this.countriesName;
  }

}
