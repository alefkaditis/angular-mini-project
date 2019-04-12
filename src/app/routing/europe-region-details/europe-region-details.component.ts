import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';
import { ActivatedRoute } from '@angular/router';
import { CountryDetails } from 'src/app/shared/models';

@Component({
  selector: 'app-europe-region-details',
  templateUrl: './europe-region-details.component.html',
  styleUrls: ['./europe-region-details.component.scss']
})
export class EuropeRegionDetailsComponent implements OnInit {

  private routeParams: string;
  public countryDetails: Array<CountryDetails>;
  constructor(private service: ServicesService, private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      console.log(p);
      this.routeParams = p.capital;
    });
  }

  ngOnInit() {
    this.service.getEuropeRegionDetails(this.routeParams).subscribe((data: Array<CountryDetails>) => {
      this.countryDetails = data;
    });
  }

}
