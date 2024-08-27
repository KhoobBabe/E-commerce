import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];
  constructor() { }

  registerUser(user : User): void {
    this.users.push(user);
    console.log('User registered: ', user);
  }

}
