import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';



class PorductCharacteristics {
    name: string;
    value: string;
}

export interface ProductModel extends Base { }

export class ProductModel extends TimeStamps {
    @prop()
    name: string;

    @prop()
    title: string;

    @prop()
    price: number;

    @prop()
    oldPrice: number;

    @prop()
    credit: number;

    @prop()
    calculatedRating: number;

    @prop()
    description: string;

    @prop()
    disAdvantages: string;

    // для возврата массива строк
    @prop({ type: () => [String] })
    categories: string[];

    @prop({ type: () => [String] })
    tags: string[];

    @prop({ type: () => [PorductCharacteristics], _id: false })
    characteristics: PorductCharacteristics[];
}
