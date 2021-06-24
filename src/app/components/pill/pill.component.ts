import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { pricingRange } from 'src/app/app.data';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit {


  @Input()  active: boolean = false;
  @Input()  rightBorderSmooth: boolean = false;
  @Input()  leftBorderSmooth: boolean = false;
  @Input()  text: string = '';
 

  constructor() { }

  ngOnInit(): void {
  }

}
