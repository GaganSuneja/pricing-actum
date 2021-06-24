import { IPlanRange } from "../interfaces";

export class Selected {
    public isSelected: boolean = false;
    public select() {
        this.isSelected = true;
    }

    public deselect() {
        this.isSelected = false;
    }
}

export class Pill extends Selected {
    text: string = ""
    constructor(pText: string) {
        super();
        this.text = pText;
    }
}

export class PlanRange implements IPlanRange {

    readonly min: number;
    readonly max: number;
    readonly range: string = "";
    currencySymbol: string = "";
    rangeSymbol: string = ""

    constructor(range: IPlanRange, currencySymbol?: string, rangeSymbol?: string) {
        this.min = range.min;
        this.max = range.max;

        if (currencySymbol) {
            this.currencySymbol = currencySymbol;
        }
        if (rangeSymbol) {
            this.rangeSymbol = rangeSymbol;
        }
        
        if (this.min < 0 && this.max > 0) {
            this.range = `${this.getRange(this.max)}+`;
        }


        if (this.min >= 0 && this.max > 0) {
            this.range = `${this.getRange(this.min)} - ${this.getRange(this.max)}`;
        }
       

    }

    private getRange(value: number): string {
        return `${this.currencySymbol}${value}${this.rangeSymbol}`;
    }
}