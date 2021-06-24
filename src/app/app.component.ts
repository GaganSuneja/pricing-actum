import { Component, OnInit } from '@angular/core';
import { priceAttributesTable, pricingRange } from './app.data';
import { IPlanRange, IPlan } from './interfaces';
import { Plan } from './models/plan';
const LAST_PLAN_SELECTED = 'lastPlanSelected';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pricing';
  public pricingRange  = pricingRange;
  public pricingTable: Map<IPlanRange,IPlan[]> = new Map();
  public plans: IPlan[] = [];
  private selectedRange: IPlanRange = {min:0,max:0};
  public selectedPlan: Plan = new Plan({platformPrice:-1,leadsPerMonth:-1,pricePerTransfer:-1});
  public showForm: boolean = false;
  planRangeIndex: number = 2;
  isOnline: boolean = true;
  constructor() {
    this.createPricingData();
    this.checkConnectivity();
  }

  createPricingData() {
    for(const [index,range] of pricingRange.entries()) {
        let priceAttributeCollection = [];
        priceAttributeCollection.push(...priceAttributesTable[index]);
        this.pricingTable.set(range,priceAttributeCollection);
    }
    let lastSelectedRange:string = <string> localStorage.getItem(LAST_PLAN_SELECTED);
    if(lastSelectedRange) {
      this.planRangeIndex  = JSON.parse(lastSelectedRange)
    }
    this.setPlans(pricingRange[this.planRangeIndex]);
  }

  selectRange(range:IPlanRange) {
    this.selectedRange = range;
    this.setPlans(range);
    this.planRangeIndex = pricingRange.indexOf(range);
    localStorage.setItem(LAST_PLAN_SELECTED,JSON.stringify(this.planRangeIndex));
  }

  setPlans(range:IPlanRange) {
    this.plans = <IPlan[]>this.pricingTable.get(range);
  }

  checkConnectivity() {
    this.isOnline = (navigator.onLine)? true:false;
  }

  ngOnInit() {
  
  }
  
  selectPlan(plan: Plan) {
    this.selectedPlan = plan;
    this.showForm= true;
  }

  closeForm(){
    this.showForm=false;
  }
}
