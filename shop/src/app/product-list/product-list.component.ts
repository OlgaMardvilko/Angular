import { Component, OnInit } from '@angular/core';

import { IProduct } from '../product/product.model';

import { ProductsService } from '../product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: IProduct[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productList = this.productsService.getProductList();
    console.log(this.productList);
  }



}
