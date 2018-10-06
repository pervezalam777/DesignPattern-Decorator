export interface IWristWatch {
    initialize(type:string, cost:number, brand:string):void
    getCost():number
    getType():string 
    getBrand():string
}