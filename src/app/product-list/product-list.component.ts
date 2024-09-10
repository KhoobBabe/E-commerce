import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductSearchComponent, HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = this.productService.getProducts();
  filteredProducts: Product[] = [];
  category: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}


  openProductDetail(productId: string): void {
    this.router.navigate(['/product', productId]); // Navigate to product-detail route
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(params => {
          this.category = params['category'] || null;
          return this.products$;
        })
      )
      .subscribe(products => {
        this.filteredProducts = this.category
          ? products.filter(product => product.category === this.category)
          : products;
      });
  }
}
