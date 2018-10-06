import { DollDecorator } from "../doll/doll-decorator";
import { IDoolDecorator } from "../interfaces/I-doll-decorator";
import { IGoggles } from "../interfaces/i-goggles";

export class GogglesDollDecorator extends DollDecorator {
    private gogglesRef:IGoggles;

    constructor(dollRef:IDoolDecorator, gogglesRef:IGoggles){
        super(dollRef)
        this.gogglesRef = gogglesRef;
    }

    getWearItemsCost():number {
        let otherCost:number = this.doll.getWearItemsCost();
        let cost:number = this.gogglesRef.getCost();
        return otherCost == 0 ?  cost : otherCost + cost;
    }

    whatAreYouWearing():string {
        let item = this.doll.whatAreYouWearing();
        let type:string = this.gogglesRef.getType();
        let brand:string = this.gogglesRef.getBrand();
        if(item.length > 0){
            return `${item} , ${brand} ${type}`
        }
        return `${brand} ${type}`;     
    }
}