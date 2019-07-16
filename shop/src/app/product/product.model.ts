export enum Category {
    vitamins = "Vitamins",
    sport = "Sport",
}

export interface IProduct {
    name: string,
    description: string,
    price: number,
    delivery: Array<string>,
}

