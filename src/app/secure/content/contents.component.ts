import { Component, OnInit } from '@angular/core';
import { ThemeColorDataService } from '../../_shared/service/theme-color-data.service';
import { Subject, takeUntil } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.scss'
})
export class ContentsComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  themeColor!: string | null;

  constructor(
    private themeColorDataService: ThemeColorDataService,
    private titleService: Title,

  ){
    this.titleService.setTitle('MEDGRUPO | Conteúdos');
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
