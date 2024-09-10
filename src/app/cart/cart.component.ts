import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: { product: Product, quantity: number }[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems); // Ensure cart items are retrieved
  }

  removeFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems(); // Update cart items after removal
  }

  getTotalCost(): number {
    return this.cartService.getTotalCost();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = []; // Clear cart items in the UI
  }
}
