import { Component } from '@angular/core';
import { ThemeColorDataService } from '../../_shared/service/theme-color-data.service';
import { Title } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.scss'
})
export class MetricsComponent {
  private unsubscribe$: Subject<void> = new Subject<void>();

  themeColor!: string | null;

  constructor(
    private themeColorDataService: ThemeColorDataService,
    private titleService: Title,
  ){
    this.titleService.setTitle('MEDGRUPO | Métricas');

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
