import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from '../mock/data.json';
import { Partial } from '../models/partial.model';
import { PartialInterface } from '../interface/partial.interface';

@Injectable({
  providedIn: 'root'
})
export class PartialService implements PartialInterface {

constructor() { }
  getPartialData(): Observable<Partial[]> {
    return new Observable(observer => {
      return  observer.next(data.parcial)
    })
  }
}
