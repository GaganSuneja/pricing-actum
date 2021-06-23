import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit, OnChanges {

  @Input() readonly min: number=0;
  @Input() readonly max: number=0;
  @Input() readonly currencySymbol: string = '$';
  @Input() readonly rangeSymbol: string = 'K';
  @Input() readonly active: boolean = false;
  @Input() readonly rightBorderSmooth: boolean = false;
  @Input() readonly leftBorderSmooth: boolean = false;
 
  public range: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.min < 0 && this.max > 0) {
      this.range = `${this.getRange(this.max)}+`;
    }


    if(this.min >= 0 && this.max > 0) {
      this.range = `${this.getRange(this.min)} - ${this.getRange(this.max)}`;
    }
  }

  getRange(value:number): string {
    return `${this.currencySymbol}${value}${this.rangeSymbol}`;
  }
}
