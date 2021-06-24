import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pricingRange } from 'src/app/app.data';
import { IPill, IPlanRange } from 'src/app/interfaces';
import { PlanRange } from 'src/app/models/plan-range';

@Component({
  selector: 'app-price-range-selector',
  templateUrl: './price-range-selector.component.html',
  styleUrls: ['./price-range-selector.component.scss']
})
export class PriceRangeSelectorComponent implements OnInit {


  @Input()  currencySymbol: string = '$';
  @Input()  rangeSymbol: string = 'K';
  @Input()  range:IPlanRange[] = [];
  @Input()  defaultRangeIndex: number = -1;
  @Output() emitSelectedRange: EventEmitter<IPlanRange> = new EventEmitter();
  pillData:IPill[] = [];
  pricingRange:IPlanRange[] = pricingRange;
  constructor() { }

  ngOnInit(): void {
  
  for(let r of this.range) {
    let newRange = new PlanRange(r, this.currencySymbol, this.rangeSymbol);
    this.pillData.push({text:newRange.range});
   }

  }

  selectedRange(index:number) {
    this.emitSelectedRange.emit(this.range[index]);
  }
}
