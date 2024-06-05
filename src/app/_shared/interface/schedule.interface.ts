import { Observable } from "rxjs";
import { Schedule } from "../models/schedule.model";

export abstract class ScheduleInterface {
    abstract getScheduleData(): Observable<Schedule[]>;
}
