import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/shared/models';

@Component({
  selector: 'app-currencies-child',
  templateUrl: './currencies-child.component.html',
  styleUrls: ['./currencies-child.component.scss']
})
export class CurrenciesChildComponent implements OnInit {

  @Input() countriesName: Array<Country>;
  constructor() { }

  ngOnInit() {
  }

}
