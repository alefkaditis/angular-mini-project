import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currencies-child',
  templateUrl: './currencies-child.component.html',
  styleUrls: ['./currencies-child.component.scss']
})
export class CurrenciesChildComponent implements OnInit {

  @Input() countriesName: string[];
  constructor() { }

  ngOnInit() {
  }

}
