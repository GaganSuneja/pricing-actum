import { Component } from '@angular/core';
import { priceAttributesTable, pricingRange } from './app.data';
import { IPriceAttributes, IPriceRange } from './interfaces';
import { PriceAttributes } from './models/price-attributes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pricing';
  pricingTable: Map<IPriceRange,IPriceAttributes[]> = new Map();
  constructor() {
    this.createPricingData();
  }

  createPricingData() {
    for(const [index,range] of pricingRange.entries()) {
        let priceAttributeCollection = [];
        for(let attr of priceAttributesTable[index]) {
          priceAttributeCollection.push(new PriceAttributes(attr));
        }
        this.pricingTable.set(range,priceAttributeCollection);
    }
    console.table(this.pricingTable);
  }


}
