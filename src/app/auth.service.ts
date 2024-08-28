import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly COOKIE_NAME = 'userRole';
  private userRole: string = ''; // Default to 'guest'
  
  

  constructor(private cookieService: CookieService) {}

  setUserRole(role: string): void {
    this.userRole = role;
    this.cookieService.set(this.COOKIE_NAME, role);
    
  }

  getUserRole(): string {
    return this.userRole;
    
  }


}

