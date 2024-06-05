import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScheduleInterface } from '../_shared/interface/schedule.interface';
import { Subject, takeUntil } from 'rxjs';
import { Schedule } from '../_shared/models/schedule.model';
import { ToDoDataService } from '../_shared/service/schedule-data.service';
import { UserInterface } from '../_shared/interface/user.interface';
import { User } from '../_shared/models/user.model';
import { UserDataService } from '../_shared/service/user-data.service';
import { ThemeColorDataService } from '../_shared/service/theme-color-data.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrl: './secure.component.scss'
})
export class SecureComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  scheduleData!: Schedule[];
  isToDoListActive: boolean = false;
  themeColor!: string | null;

  constructor(
    private scheduleInterface: ScheduleInterface,
    private toDoDataService: ToDoDataService,
    private userService: UserDataService,
    private userInterface: UserInterface,
    private themeColorDataService: ThemeColorDataService,
  ){}

  ngOnInit(): void {
    this.getScheduleData();
    this.getUserData();
    this.loadSession();
    this.getThemeStorage();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggleToDoList() {
    this.isToDoListActive = !this.isToDoListActive;
  }

  toggleToDoListHide() {
    this.isToDoListActive = false;
  }

  getScheduleData(){
    this.scheduleInterface.getScheduleData().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe({
      next: (schedules: Schedule[])=> {
        schedules.forEach(x => x.checked = false)
        this.toDoDataService.setSchedule(schedules);
      }
    })
  }

  getUserData(){
    this.userInterface.getUserData().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe({
      next: (user: User)=> {
        this.userService.setUser(user);
      }
    })
  }

  loadSession() {
    if(localStorage.getItem("theme") === null){
      localStorage.setItem('theme', 'dark')
    }
    const theme: string | null = localStorage.getItem("theme");
    this.themeColorDataService.setColorTheme(theme)
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
