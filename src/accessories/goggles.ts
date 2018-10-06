import { IGoggles } from "../interfaces/i-goggles";


export class Goggle implements IGoggles{
    private cost:number = 4000;
    private type:string = "goggles";
    private brand:string = "RayBen";
    
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