import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from 'express';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private users: User[] = [];

  constructor( private router: Router, private cookieService: CookieService) { }

  registerUser(user : User): void {
    this.users.push(user);
    console.log('User registered: ', user);
  }

  

}
