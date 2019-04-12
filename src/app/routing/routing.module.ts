import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EuropeRegionComponent } from './europe-region/europe-region.component';
import { EuropeRegionDetailsComponent } from './europe-region-details/europe-region-details.component';

@NgModule({
  declarations: [EuropeRegionComponent, EuropeRegionDetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EuropeRegionComponent,
    EuropeRegionDetailsComponent
  ]
})
export class RoutingModule { }
