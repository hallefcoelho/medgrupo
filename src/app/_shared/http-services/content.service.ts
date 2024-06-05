import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import data from '../mock/data.json';
import { ContentInterface } from '../interface/content.interface';
import { Content } from '../models/contente.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService implements ContentInterface {

constructor() { }
  getContentData(): Observable<Content[]> {
    return new Observable((observer: Observer<Content[]>) => {
      return  observer.next(data.conteudos)
    })
  }
}
