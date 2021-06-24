import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {

  @Input() public plan:Plan = new Plan( {
    leadsPerMonth:-1,
    pricePerTransfer: -1,
    platformPrice: -1
  });
  
  @Input() currencySymbol = '$';
  @Output() emitSelectedPlan:EventEmitter<Plan> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectPlan() {
    this.emitSelectedPlan.emit(this.plan);
  }
}
