import { DollDecorator } from "../doll/doll-decorator";
import { IDoolDecorator } from "../interfaces/I-doll-decorator";
import { IHat } from "../interfaces/i-hat";

export class HatDollDecorator extends DollDecorator {
    private hat:IHat;

    constructor(dollRef:IDoolDecorator, hat:IHat){
        super(dollRef)
        this.hat = hat;
    }

    getWearItemsCost():number {
        let otherCost:number = this.doll.getWearItemsCost();
        let cost:number = this.hat.getCost();
        return otherCost == 0 ? cost : otherCost + cost;
    }

    whatAreYouWearing():string {
        let item = this.doll.whatAreYouWearing();
        let type:string = this.hat.getType();
        if(item.length > 0){
            return `${item}, ${type}`
        }
        return type;     
    }
}