export interface IHat {
    initialize(type:string, cost:number):void
    getCost():number
    getType():string
}