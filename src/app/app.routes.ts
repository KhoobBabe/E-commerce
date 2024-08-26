import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductListComponent }, // Displays product list
    { path: 'product/:id', component: ProductDetailComponent }, // Displays product details
    { path: 'cart', component: CartComponent},
    { path: '**', redirectTo: '/products' }, // Fallback route
    
];


