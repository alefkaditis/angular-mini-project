import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesChildComponent } from './currencies-child.component';

describe('CurrenciesChildComponent', () => {
  let component: CurrenciesChildComponent;
  let fixture: ComponentFixture<CurrenciesChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
