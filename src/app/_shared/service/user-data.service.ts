import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private _user!: User;
  user = new BehaviorSubject<User>(this._user);
  user$ = this.user.asObservable();

  setUser(user: User): void {
    this._user = user;
    this.user.next(this._user);
  }
}
