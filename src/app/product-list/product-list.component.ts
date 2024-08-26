import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common'; 
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  product: Product[] = [

    new Product(1, 'Laptop', 1000, 'High-performance ', true),
    new Product(2, 'Tablet', 500, 'Portable tablet', false),
    new Product(3, 'Smartphone', 800, 'Latest smartphone', true)

  ];

  constructor() { } 

  ngOnInit(): void {


}
}


