import { IDoolDecorator } from "../interfaces/I-doll-decorator";

export abstract class DollDecorator implements IDoolDecorator {
    protected doll:IDoolDecorator;
    
    constructor(dollRef:IDoolDecorator){
        this.doll = dollRef;
    }

    getWearItemsCost():number {
        return this.doll.getWearItemsCost(); 
    }

    whatAreYouWearing():string {
        return this.doll.whatAreYouWearing();
    }
}