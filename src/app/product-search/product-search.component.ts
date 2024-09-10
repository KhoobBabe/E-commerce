import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, HttpClientModule],
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  searchForm: FormGroup;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchPerformed: boolean = false; // Track if the search was performed

  constructor(private productService: ProductService) {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl('')
    });
  }

  ngOnInit(): void {
    // Subscribe to the observable to fetch products from the service
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  onSearch(): void {
    this.searchPerformed = true; // Set to true when search is performed

    const name = this.searchForm.get('name')?.value.toLowerCase() || '';
    const category = this.searchForm.get('category')?.value.toLowerCase() || '';

    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(name) &&
      product.category.toLowerCase().includes(category)
    );
  }
}
