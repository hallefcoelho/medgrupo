import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from '../mock/data.json';
import { Schedule } from '../models/schedule.model';
import { ScheduleInterface } from '../interface/schedule.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements ScheduleInterface {

constructor() { }
  getScheduleData(): Observable<Schedule[]> {
    return new Observable(observer => {
      return  observer.next(data.tarefas)
    })
  }
}
