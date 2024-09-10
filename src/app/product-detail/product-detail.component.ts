import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common'; 
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { HttpClientModule } from '@angular/common/http'; // Make sure this is imported

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Import HttpClientModule
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const productId = paramMap.get('id'); // Make sure the key matches what you use in your routes
      if (productId) {
        this.productService.getProductById(productId).subscribe(product => {
          this.product = product;
        });
      }
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log('Product added to cart:', product);
  }
}
