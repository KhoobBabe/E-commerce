import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems: { product: Product, quantity: number }[] = [];

  constructor() { }

  // Add a product to the cart
  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity if product already in cart
    } else {
      this.cartItems.push({ product, quantity: 1 }); // Add new product to cart
    }
    console.log(this.cartItems);
  }

  // Remove a product from the cart
  removeFromCart(productId: number): void {
    const index = this.cartItems.findIndex(item => item.product.id === productId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  // Get all items in the cart
  getCartItems(): { product: Product, quantity: number }[] {
    return this.cartItems;
  }

  // Calculate the total cost of the cart
  getTotalCost(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  // Clear the cart
  clearCart(): void {
    this.cartItems = [];
  }


  // calculateTotalPrice(products: Product[]): number {
  //   return products.reduce((total, product) => total + product.getPrice(), 0);
  // }

  
}
