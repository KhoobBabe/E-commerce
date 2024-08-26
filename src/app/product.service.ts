import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1, 'Laptop', 1000, 'High-performance laptop', true),
    new Product(2, 'Tablet', 500, 'Portable tablet', false),
    new Product(3, 'Smartphone', 800, 'Latest smartphone', true)
  ];

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}