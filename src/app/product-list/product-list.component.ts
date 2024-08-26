import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common'; 
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}


