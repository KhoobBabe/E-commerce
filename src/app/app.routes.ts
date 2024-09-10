import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AuthGuard } from './auth.guard';



export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent, canMatch: [AuthGuard] },
  { path: 'product/:id', component: ProductDetailComponent, canMatch: [AuthGuard] },  // Updated route
  { path: 'cart', component: CartComponent, canMatch: [AuthGuard] },
  { 
    path: 'checkout', 
    loadComponent: () => import('./checkout/checkout.component').then(m => m.CheckoutComponent),
    canMatch: [AuthGuard]
  },
];