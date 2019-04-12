import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { EuropeRegionComponent } from './routing/europe-region/europe-region.component';
import { EuropeRegionDetailsComponent } from './routing/europe-region-details/europe-region-details.component';

const routes: Routes = [
  { path: 'europe-region',
    component: EuropeRegionComponent,
    children: [{
      path: 'europe-region-details/:capital', component: EuropeRegionDetailsComponent
    }]
  },
  // {
  //   path: 'consume-params/:id',
  //   component: ConsumeParamsComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RoutingModule
  ],
  exports: [
    RouterModule,
    RoutingModule
  ]
})
export class AppRoutingModule { }
