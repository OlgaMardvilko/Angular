import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../models/product.models';

import { CartServiceService } from '../service/cart.service';

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

    productBuy = [];

    @Input() item;

    Delivery = ['Next day', 'Standart', 'Free'];


    constructor(private cartService: CartServiceService) { }

    ngOnInit() {

    }

    onBuyProduct() {
      console.log('You buy this prodect!!!');
      this.cartService.setProductArray(this.item);
    }

}
