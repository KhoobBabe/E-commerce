import { Injectable } from '@angular/core';
import { CanMatchFn, UrlSegment, Router, Route, Routes } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    const role = this.authService.getUserRole();
    
    // Reconstruct the URL from UrlSegment[]
    const currentUrl = segments.map(segment => segment.path).join('/');

    if (role === 'admin') {
      return true;
    } else if (role === 'guest') {
      if (currentUrl.startsWith('products') || currentUrl.startsWith('search')) {
        return true;
      }
      this.router.navigate(['/products']); // Redirect guest users to products
      return false;
    }

    this.router.navigate(['/login']); // Redirect to login if no valid role
    return false;
  }
}