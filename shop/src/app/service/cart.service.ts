import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  productArray: IProduct[] = [];

  constructor() { }

  getProductArray(): IProduct[] {
    return this.productArray;
  }

  setProductArray(products: IProduct): IProduct[] {
    this.productArray.push(products);
    return this.productArray;
  }

}
