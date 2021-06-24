import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IPlan } from 'src/app/interfaces';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-plan-selector',
  templateUrl: './plan-selector.component.html',
  styleUrls: ['./plan-selector.component.scss']
})
export class PlanSelectorComponent implements OnInit, OnChanges {

  @Input() plansData: IPlan[] = [];
  @Output() emitPlan:EventEmitter<Plan> =  new EventEmitter();
  plans:Plan[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes:SimpleChanges):void {
    this.resetPlans();
    (this.plansData)?this.plansData.forEach(plan=>this.plans.push(new Plan(plan))):null;
    this.plans.push(new Plan({leadsPerMonth:-1,pricePerTransfer:-1,platformPrice:-1},true));
    console.log(this.plans);
  }

  resetPlans() {
    this.plans = [];
  }

  selectPlan(plan:Plan) {
    console.log(plan);
    this.emitPlan.emit(plan);
  }

}
