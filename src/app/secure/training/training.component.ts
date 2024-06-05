import { Component, OnInit } from '@angular/core';
import { ThemeColorDataService } from '../../_shared/service/theme-color-data.service';
import { Title } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  themeColor!: string | null;

  constructor(
    private themeColorDataService: ThemeColorDataService,
    private titleService: Title,
  ){
    this.titleService.setTitle('MEDGRUPO | Treinamento');
  }

  ngOnInit(): void {
    this.getThemeStorage();
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
