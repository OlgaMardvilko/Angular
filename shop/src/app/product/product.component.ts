import { Component, OnInit, Input } from '@angular/core';

import { Category, IProduct } from '../models/product.models';

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

    @Input() item: IProduct;

    Delivery = ['Next day', 'Standart', 'Free'];


    // Не нужно внедрять зависимости в этот компонент.
    // Создавайте аутпут.
    constructor(private cartService: CartServiceService) { }

    ngOnInit() {

    }

    onBuyProduct() {
      console.log('You buy this prodect!!!');
      this.cartService.setProductArray(this.item);
    }

}
