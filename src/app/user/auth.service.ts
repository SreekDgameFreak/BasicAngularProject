import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {

  currentUser: IUser;

  constructor() { }

  loginUser(userName:string, password:string) {

    this.currentUser = {
      id: 1,
      userName: "Sreek",
      firstName: "Sreekar",
      lastName: "Swarnapuri"
    }

  }

  //returns true if the user is authenticated if not false.
  isAuthenticated() {
    return !!this.currentUser;
  }
}
