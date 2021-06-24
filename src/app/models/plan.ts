import {  IPlan } from "../interfaces";
import { Popular } from "./popular";

export class Plan extends Popular implements IPlan {
     leadsPerMonth:number;
     pricePerTransfer: number;
     platformPrice: number;
     isEnterprise?: boolean;
    // derived attributes
     totalLeadPrice:number;
     packagePrice: number;
     planName: string;


    constructor(plan:IPlan,isEnterprise?:boolean) {
        // should be based on backend input
        plan.leadsPerMonth === 40? super(true) : super(false);
        this.leadsPerMonth = plan.leadsPerMonth;
        this.pricePerTransfer = plan.pricePerTransfer;
        this.platformPrice = plan.platformPrice;
        
        this.totalLeadPrice = this.pricePerTransfer * this.leadsPerMonth;
        this.packagePrice = this.totalLeadPrice + this.platformPrice;
        this.isEnterprise = isEnterprise;
        this.planName = (isEnterprise)? 'Enterprise': `Qualified ${this.leadsPerMonth}`;
    }


}