import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.getPrice(), 0);
  }

  
}
