import { Observable } from "rxjs";
import { Partial } from "../models/partial.model";

export abstract class PartialInterface {
    abstract getPartialData(): Observable<Partial[]>;
}
