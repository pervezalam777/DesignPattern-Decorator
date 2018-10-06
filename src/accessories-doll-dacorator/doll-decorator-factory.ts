import { EarRingsDollDecorator } from "./ear-rings";
import { IDoolDecorator } from "../interfaces/I-doll-decorator";
import { WristWatchDollDecorator } from "./wrist-watch";
import { HatDollDecorator } from "./hat";
import { GogglesDollDecorator } from "./goggels";
import { DollDecorator } from "../doll/doll-decorator";

export const ACCESSORY_DECORATORS = {
    EAR_RING:"decorate-with-ear-ring",
    WRIST_WATCH:"decorate-with-wrist-watch",
    HAT:"decorate-with-hat",
    GOGGLES:"decorate-with-goggles"
}

export class DollDecoratorFactory {
    public static create(name:string, dollRef:IDoolDecorator, 
                            decoratorWith:any):IDoolDecorator | null{
        switch(name){
            case ACCESSORY_DECORATORS.EAR_RING:
                return new EarRingsDollDecorator(dollRef, decoratorWith);
            case ACCESSORY_DECORATORS.WRIST_WATCH:
                return new WristWatchDollDecorator(dollRef, decoratorWith);
            case ACCESSORY_DECORATORS.HAT:
                return new HatDollDecorator(dollRef, decoratorWith);
            case ACCESSORY_DECORATORS.GOGGLES:
                return new GogglesDollDecorator(dollRef, decoratorWith);
        }
        return null;
    }
}