import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs'; // Import `of` to create an observable
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

// Create a mock ProductService
class MockProductService {
  getProductById(id: string) {
    // Return a mock product observable
    return of({
      id,
      name: 'Test Product',
      price: 100,
      description: 'Test Description',
      availability: true,
      category: 'Test Category'
    } as Product);
  }
}

// Create a mock ActivatedRoute
class MockActivatedRoute {
  // Define `paramMap` with a mock ID
  snapshot = {
    paramMap: {
      get: (key: string) => '1'
    }
  };
}

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent],
      providers: [
        { provide: ProductService, useClass: MockProductService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display product details', () => {
    // Ensure the product is defined
    expect(component.product).toBeDefined();
    expect(component.product).toEqual({
      id: '1',
      name: 'Test Product',
      price: 100,
      description: 'Test Description',
      availability: true,
      category: 'Test Category'
    });
  });
});
