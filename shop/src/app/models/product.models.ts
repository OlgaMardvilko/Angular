
export enum Category {
    VITAMINS = 'Vitamins',
    FOOD = 'Food',
    SPORT = 'Sport',
    NATURE = 'Nature',
}

export interface IProduct {
    name: string;
    description: string;
    price: number;
    delivery: Array<string>;
    note?: string;
}
