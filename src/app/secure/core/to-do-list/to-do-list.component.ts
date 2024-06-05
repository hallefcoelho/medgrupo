import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Schedule } from '../../../_shared/models/schedule.model';
import { ToDoDataService } from '../../../_shared/service/schedule-data.service';
import { Subject, takeUntil } from 'rxjs';
import { ThemeColorDataService } from '../../../_shared/service/theme-color-data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  scheduleData!:Schedule[];
  themeColor!: string | null;

  constructor(
    private toDoDataService: ToDoDataService,
    private themeColorDataService: ThemeColorDataService
  ){}

  ngOnInit(): void {
      this.getToDoList();
      this.getThemeStorage();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getToDoList(){
    this.toDoDataService.schedules$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe({
      next: (schedule: Schedule[]) => {
         this.scheduleData = schedule;
      }
    })
  }

  scheduleChecked(schedule: Schedule, index: number){
    schedule.checked = !schedule.checked;
    this.scheduleData[index].checked = schedule.checked;
    this.toDoDataService.setSchedule(this.scheduleData);
  }

  getThemeStorage(){
    this.themeColorDataService.themeColor$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe({
      next: (theme: string | null) => {
        this.themeColor = theme;
      }
    })
  }

}
