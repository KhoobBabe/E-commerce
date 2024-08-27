import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1, 'Laptop', 1000, 'High-performance laptop', true, 'Laptop'),
    new Product(2, 'Tablet', 500, 'Portable tablet', false, 'Tablet'),
    new Product(3, 'Smartphone', 800, 'Latest smartphone', true, 'Mobile'),
    new Product(1, 'iPhone 15 Pro Max', 1200, 'Latest flagship smartphone with advanced camera', true, 'Mobile'),
    new Product(2, 'Samsung Galaxy S24 Ultra', 1000, 'High-performance Android smartphone', true, 'Mobile'),
    new Product(3, 'Google Pixel 8', 800, 'Pure Android experience with excellent camera', true, 'Mobile'),
    new Product(4, 'OnePlus 12', 700, 'Value-for-money flagship with fast charging', true, 'Mobile'),
    new Product(5, 'Xiaomi 14 Pro', 600, 'Affordable flagship with powerful processor', true, 'Mobile'),

    new Product(6, 'iPad Pro 12.9-inch', 1000, 'High-end tablet for productivity and creativity', true, 'Tablet'),
    new Product(7, 'Samsung Galaxy Tab S9 Ultra', 800, 'Large-screen tablet for multitasking', true, 'Tablet'),
    new Product(8, 'Amazon Kindle Oasis', 300, 'E-reader with premium design', true, 'Tablet'),
    new Product(9, 'Lenovo Tab P11 Pro Gen 2', 500, 'Mid-range tablet with good performance', true, 'Tablet'),
    new Product(10, 'Huawei MatePad Pro 11', 600, 'Android tablet with powerful processor', true, 'Tablet'),

    new Product(11, 'MacBook Pro 16-inch M2 Pro', 2500, 'High-performance laptop for professionals', true, 'Laptop'),
    new Product(12, 'Dell XPS 15', 2000, 'Powerful Windows laptop with premium build', true, 'Laptop'),
    new Product(13, 'HP Spectre x360', 1500, '2-in-1 laptop with convertible design', true, 'Laptop'),
    new Product(14, 'Lenovo ThinkPad X1 Carbon Gen 11', 1800, 'Business-oriented laptop with durability', true, 'Laptop'),
    new Product(15, 'Acer Predator Helios 17', 2000, 'Gaming laptop with powerful graphics', true, 'Laptop')
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