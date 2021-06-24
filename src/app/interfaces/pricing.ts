export interface IPlan {
    leadsPerMonth:number;
    pricePerTransfer: number;
    platformPrice: number;
}

export interface IPlanRange {
    min: number;
    max: number;
}