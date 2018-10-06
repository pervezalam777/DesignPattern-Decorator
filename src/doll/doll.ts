import { IDoolDecorator } from "../interfaces/I-doll-decorator";

export class Doll implements IDoolDecorator {

    getWearItemsCost():number {
        return 0;
    }

    whatAreYouWearing():string {
        return "";
    }
}

export class DollFactory {
    public static create():IDoolDecorator {
        return new Doll();
    }
}