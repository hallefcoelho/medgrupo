import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInterface } from '../interface/user.interface';
import data from '../mock/data.json';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserInterface {

constructor() { }
  getUserData(): Observable<User> {
    return new Observable(observer => {
      return  observer.next(data.user)
    })
  }
}
