import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';
import { Country } from 'src/app/shared/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-europe-region',
  templateUrl: './europe-region.component.html',
  styleUrls: ['./europe-region.component.scss']
})
export class EuropeRegionComponent implements OnInit {

  public countries: Array<Country>;
  constructor(private service: ServicesService, private route: ActivatedRoute) {
    // this.route.queryParams.subscribe(p => console.log(p));
  }

  ngOnInit() {
    this.service.getEuropeRegion().subscribe((data: Array<Country>) => {
      this.countries = data;
    });
  }

}
