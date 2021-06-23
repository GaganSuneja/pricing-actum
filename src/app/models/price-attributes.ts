import { IPriceAttributes } from "../interfaces";

export class PriceAttributes implements IPriceAttributes{
     leadsPerMonth:number;
     pricePerTransfer: number;
     platformPrice: number;
    
    // derived attributes
     totalLeadPrice:number;
     packagePrice: number;
     packageName: string;
     isPopular: boolean;


    constructor(priceAttributes:IPriceAttributes) {
        this.leadsPerMonth = priceAttributes.leadsPerMonth;
        this.pricePerTransfer = priceAttributes.pricePerTransfer;
        this.platformPrice = priceAttributes.platformPrice;
        
        this.packageName = `Qualified ${this.leadsPerMonth}`;
        this.totalLeadPrice = this.pricePerTransfer * this.leadsPerMonth;
        this.packagePrice = this.totalLeadPrice + this.platformPrice;
        this.leadsPerMonth === 40? this.isPopular=true : this.isPopular=false;
    }
}