import { Component, Input, OnInit } from '@angular/core';
import { PriceAttributes } from 'src/app/models/price-attributes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public cardProps:PriceAttributes = new PriceAttributes( {
    leadsPerMonth:-1,
    pricePerTransfer: -1,
    platformPrice: -1
  });

  @Input() currencySymbol = '$';

  constructor() {
  //   this.cardProps = new PriceAttributes(
  //     {
  //       leadsPerMonth:-1,
  //       pricePerTransfer: -1,
  //       platformPrice: -1
  //     });
  //  }
  }

  ngOnInit(): void {
  }

  selectPlan() {
    
  }
}
