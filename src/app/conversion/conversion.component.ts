import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  cInput = 15;
  fInput = 68;
  kInput = 300;

  cTOf = c => { return (c * (1.8) + 32); }
  cTOk = c => { return (parseInt(c) + 273.15); }

  fTOc = f => { return ((f - 32) * (5/9)); }
  fTOk = f => { return (parseInt(f) + 459.67) * (5 / 9); }

  kTOc = k => { return (k - 273.15); }
  kTOf = k => { return ((k * (9/5)) - 459.67); }

  constructor() { }

  ngOnInit() {
  }

}
