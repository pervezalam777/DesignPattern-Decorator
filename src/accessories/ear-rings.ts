import { IEarRing } from "../interfaces/i-ear-ring";

export class EarRing implements IEarRing{
    private cost:number = 10;
    private type:string = "artificial ear ring";
    private shape:string = "circle";
    
    constructor(){

    }

    initialize(type:string, cost:number, shape:string){
        this.cost = cost;
        this.type = type;
        this.shape = shape;
    }

    getCost():number{
        return this.cost
    }

    getType():string {
        return this.type;
    }
}