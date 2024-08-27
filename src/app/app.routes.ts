import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductListComponent }, // Displays product list
    { path: 'product/:id', component: ProductDetailComponent }, // Displays product details
    { path: 'cart', component: CartComponent},
    { 
        path: 'checkout', 
        loadComponent: () => import('./checkout/checkout.component').then(m => m.CheckoutComponent) 
      },
    { path: 'userRegistration', component: UserRegistrationComponent },
    { path: '**', redirectTo: '/products' }, // Fallback route
    
];


