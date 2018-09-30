import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  qty = 0;
  cost = 0;

  cInput = 0;
  cTOf = 0;
  cTOk = 0;

  fInput = 0;
  fTOc = 0;
  fTOk = 0;

  kInput = 0;
  kTOc = 0;
  kTOf = 0;
  constructor() { }

  ngOnInit() {
  }

}
