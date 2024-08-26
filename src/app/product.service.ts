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

   // Fetch all products
   getProducts(): Product[] {
    return this.products;
  }

  // Add a new product
  addProduct(product: Product): void {
    this.products.push(product);
  }

  // Update an existing product
  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  // Delete a product
  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}