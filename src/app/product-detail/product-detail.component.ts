import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common'; 
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})


export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const productId = paramMap.get('id');
      if (productId) {
        this.product = this.productService.getProductById(+productId);
        // Manually trigger change detection if needed
      }
    });
  }

  addToCart(product: Product): void {
    console.log('Added to cart:', product);
    // Implement your add to cart logic here
  }
}

