import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContentInterface } from '../../_shared/interface/content.interface';
import { Subject, takeUntil } from 'rxjs';
import { Content } from '../../_shared/models/contente.model';
import { Partial } from '../../_shared/models/partial.model';
import { PartialInterface } from '../../_shared/interface/partial.interface';
import { ScheduleInterface } from '../../_shared/interface/schedule.interface';
import { Schedule } from '../../_shared/models/schedule.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  contentList!: Content[];
  partial!: Partial[];

  scheduleData!: Schedule[];

  constructor(
    private titleService: Title,
    private contentInterface: ContentInterface,
    private partialInterface: PartialInterface,
    private scheduleInterface: ScheduleInterface
  ){
    this.titleService.setTitle('MEDGRUPO | Home');
  }

  ngOnInit(): void {
    this.getDataContent();
    this.getDataPartial();
    this.getScheduleData();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getDataContent(){
    this.contentInterface.getContentData().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe({
      next: (content: Content[]) => {
        this.contentList = content;
      }
    })
  }
  getDataPartial(){
    this.partialInterface.getPartialData().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe({
      next: (content: Partial[]) => {
        this.partial = content;
      }
    })
  }

  getScheduleData(){
    this.scheduleInterface.getScheduleData().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe({
      next: (schedules: Schedule[])=> {
        this.scheduleData = schedules;
      }
    })
  }
}
