import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public productArray: IProduct[] = [
      { name: "Vitamin A",
        description: 'Pharma Nord Omega 7 Buckthorn Oil Capsules contain SBA24 extracted from Himalayan Seabuckthorn berries using CO2 Supercritical extraction, which guarantees maximum quality and ensures undamaged PUFAs. This is in combination with a high concentration of Omega 7 along with the essential fatty acids Omega 3, 6 and 9.',
        price: 20,
        delivery: ['Standart', 'Next day', 'Free'],
      },
      { name: "Vitamin B",
        description: 'SBA24 extracted from Himalayan Seabuckthorn berries using CO2 Supercritical extraction, which guarantees maximum quality and ensures undamaged PUFAs. This is in combination with a high concentration of Omega 7 along with the essential fatty acids Omega 3, 6 and 9.',
        price: 40,
        delivery: ['Express', 'Next day', 'Free'],
      },
      { name: "Vitamin C",
        description: 'Capsules contain SBA24 extracted from Himalayan Seabuckthorn berries using CO2 Supercritical extraction, which guarantees maximum quality and ensures undamaged PUFAs. This is in combination with a high concentration of Omega 7 along with the essential fatty acids Omega 3, 6 and 9.',
        price: 30,
        delivery: ['Standart', 'Next day', 'Express'],
      },
  ]

  getProductList() {
      return this.productArray;
  }

}
