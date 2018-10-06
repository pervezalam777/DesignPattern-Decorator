import { IWristWatch } from "../interfaces/i-wrist-watch";


export class WristWatch implements IWristWatch{
    private cost:number = 3000;
    private type:string = "wrist watch";
    private brand:string = "TAG";
    
    constructor(){

    }

    initialize(type:string, cost:number, brand:string){
        this.cost = cost;
        this.type = type;
        this.brand = brand;
    }

    getCost():number{
        return this.cost
    }

    getType():string {
        return this.type;
    }

    getBrand():string{
        return this.brand;
    }
}