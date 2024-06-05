import { Observable } from "rxjs";
import { User } from "../models/user.model";

export abstract class UserInterface {
    abstract getUserData(): Observable<User>;
}
