import { IHat } from "../interfaces/i-hat";

export class Hat implements IHat {
    private cost:number = 100;
    private type:string = "hat";
    
    constructor(){ }

    initialize(type:string, cost:number){
        this.cost = cost;
        this.type = type;
    }

    getCost():number{
        return this.cost
    }

    getType():string {
        return this.type;
    }
}