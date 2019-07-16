import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../models/product.models';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    delivery: Array<string>;

    @Input() item;

    Delivery = ['Next day', 'Standart', 'Free'];


    constructor() { }

    ngOnInit() {

    }

    onBuyProduct() {
      console.log('You buy this prodect!!!');
    }

}
