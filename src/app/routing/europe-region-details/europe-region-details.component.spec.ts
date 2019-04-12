import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeRegionDetailsComponent } from './europe-region-details.component';

describe('EuropeRegionDetailsComponent', () => {
  let component: EuropeRegionDetailsComponent;
  let fixture: ComponentFixture<EuropeRegionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeRegionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeRegionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
