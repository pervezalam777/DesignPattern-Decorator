import { EarRing } from "./ear-rings";
import { Goggle } from "./goggles";
import { Hat } from "./hat";
import { WristWatch } from "./wrist-watch";

export const ACCESSORY_NAME = {
    EAR_RING:"ear-ring",
    GOGGLES:"goggles",
    HAT:"hat",
    WRIST_WATCH:"writ watch"
}

export class AccessoriesFactory {
    public static create(name:string){
        switch(name){
            case ACCESSORY_NAME.EAR_RING:
                return new EarRing();
            case ACCESSORY_NAME.GOGGLES:
                return new Goggle();
            case ACCESSORY_NAME.HAT:
                return new Hat();
            case ACCESSORY_NAME.WRIST_WATCH:
                return new WristWatch();
        }
        return null;
    }
}