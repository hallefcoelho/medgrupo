import { Observable } from "rxjs";
import { Content } from "../models/contente.model";

export abstract class ContentInterface {
    abstract getContentData(): Observable<Content[]>;
}
