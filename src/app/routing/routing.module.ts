import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EuropeRegionComponent } from './europe-region/europe-region.component';
import { EuropeRegionDetailsComponent } from './europe-region-details/europe-region-details.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrenciesChildComponent } from './currencies-child/currencies-child.component';

@NgModule({
  declarations: [EuropeRegionComponent, EuropeRegionDetailsComponent, CurrenciesComponent, CurrenciesChildComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EuropeRegionComponent,
    EuropeRegionDetailsComponent,
    CurrenciesComponent,
    CurrenciesChildComponent
  ]
})
export class RoutingModule { }
