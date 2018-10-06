import { DollDecorator } from "../doll/doll-decorator";
import { IDoolDecorator } from "../interfaces/I-doll-decorator";
import { IEarRing } from "../interfaces/i-ear-ring";

export class EarRingsDollDecorator extends DollDecorator {
    private earRing:IEarRing;

    constructor(dollRef:IDoolDecorator, earRing:IEarRing){
        super(dollRef);
        this.earRing = earRing;
    }

    getWearItemsCost():number {
        let otherCost:number = this.doll.getWearItemsCost();
        let cost:number =  this.earRing.getCost()
        return otherCost == 0 ? cost : otherCost + cost;
    }

    whatAreYouWearing():string {
        let item = this.doll.whatAreYouWearing();
        let description:string = this.earRing.getType();
        if(item.length > 0){
            return `${item }, ${description}`;
        }
        return description;     
    }
}
