import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Schedule } from "../models/schedule.model";

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  private _schedules: Schedule[] = [];
  schedules = new BehaviorSubject<Schedule[]>(this._schedules);
  schedules$ = this.schedules.asObservable();

  setSchedule(schedule: Schedule[]): void {
    this._schedules = schedule;
    this.schedules.next(this._schedules);
  }
}
