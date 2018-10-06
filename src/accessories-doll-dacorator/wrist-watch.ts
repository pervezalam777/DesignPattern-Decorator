import { DollDecorator } from "../doll/doll-decorator";
import { IDoolDecorator } from "../interfaces/I-doll-decorator";
import { IWristWatch } from "../interfaces/i-wrist-watch";

export class WristWatchDollDecorator extends DollDecorator {
    private wristWatch:IWristWatch

    constructor(dollRef:IDoolDecorator, wristWatch:IWristWatch){
        super(dollRef)
        this.wristWatch = wristWatch;
    }

    getWearItemsCost():number {
        let otherCost:number = this.doll.getWearItemsCost();
        let cost:number = this.wristWatch.getCost();
        return otherCost == 0 ? cost : otherCost + cost;
    }

    whatAreYouWearing():string {
        let item = this.doll.whatAreYouWearing();
        let type:string = this.wristWatch.getType();
        let brand:string = this.wristWatch.getBrand();
        if(item.length > 0){
            return `item, ${brand} ${type}`
        }
        return `${brand} ${type}`;     
    }
}