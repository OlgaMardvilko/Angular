import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart.service';

import { IProduct } from '../models/product.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productsListBuy: IProduct[] = [];

  constructor(private cartService: CartServiceService) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productsListBuy = this.cartService.getProductArray();
  }
}
