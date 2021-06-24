export class ProductModel {
    _id: string;
    name: string;
    title: string;
    price: number;
    oldPrice: number;
    credit: number;
    calculatedRating: number;
    description: string;
    disAdvantages: string;
    categories: string[];
    tags: string;
    characteristics: {
        [key: string]: string
    };
}
