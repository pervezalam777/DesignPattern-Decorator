import { IDoolDecorator } from "./interfaces/I-doll-decorator";
import { DollFactory } from "./doll/doll";
import { IGoggles } from "./interfaces/i-goggles";
import { AccessoriesFactory, ACCESSORY_NAME } from "./accessories/accessoriesFactory";
import { DollDecoratorFactory, ACCESSORY_DECORATORS } from "./accessories-doll-dacorator/doll-decorator-factory";
import { IEarRing } from "./interfaces/i-ear-ring";

class Bootstrap {

    constructor(){  }

    public initialize(){
        let dollOne:IDoolDecorator = DollFactory.create();
        let scottGoggles:IGoggles = <IGoggles> AccessoriesFactory.create(ACCESSORY_NAME.GOGGLES);
        dollOne = <IDoolDecorator>DollDecoratorFactory
                        .create(ACCESSORY_DECORATORS.GOGGLES, dollOne, scottGoggles)
        console.log(dollOne.whatAreYouWearing());
        console.log(dollOne.getWearItemsCost());
            
        let goldEarRing:IEarRing = <IEarRing> AccessoriesFactory.create(ACCESSORY_NAME.EAR_RING);
        goldEarRing.initialize("gold ear ring", 10000, "circular");

        dollOne = <IDoolDecorator>DollDecoratorFactory
                        .create(ACCESSORY_DECORATORS.EAR_RING, dollOne, goldEarRing)

        console.log(dollOne.whatAreYouWearing());
        console.log(dollOne.getWearItemsCost());

        let dollTwo:IDoolDecorator = DollFactory.create();

    }
}   

let boot = new Bootstrap();
boot.initialize();  