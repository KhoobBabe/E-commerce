import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule, CommonModule ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent implements OnInit {

  searchForm: FormGroup;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {
    // Initialize the searchForm in the constructor
    this.searchForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl('')
    });
  }

  ngOnInit(): void {
    // Initialize the form with name and category fields
    this.searchForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl('')
    });


      this.products = this.productService.getProducts();
  }

    // Method to handle the form submission
    onSearch(): void {
      const name = this.searchForm.get('name')?.value.toLowerCase() || '';
      const category = this.searchForm.get('category')?.value.toLowerCase() || '';
  
      // Filter products based on search criteria
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(name) &&
        product.category.toLowerCase().includes(category)
      );
    }

}
