import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductListComponent } from '../_shared/components/product-list/product-list.component';
import { User } from '../../../_shared/models/user.model';
import { Subject, takeUntil } from 'rxjs';
import { ChangeThemeComponent } from '../_shared/components/change-theme/change-theme.component';
import { UserDataService } from '../../../_shared/service/user-data.service';
import { ThemeColorDataService } from '../../../_shared/service/theme-color-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  themeColor!: string | null;
  user!: User;

  constructor(
    private dialog: MatDialog,
    private userDataService: UserDataService,
    private themeColorDataService: ThemeColorDataService
  ){}

  ngOnInit(): void {
    this.getUserData();
    this.getThemeStorage();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getUserData(){
    this.userDataService.user$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe({
      next: (user: User) => {
        this.user = user;
      }
    });
  }

  openListProduct(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '776px';
    dialogConfig.height = '550px';
    dialogConfig.enterAnimationDuration = '500ms';
    dialogConfig.exitAnimationDuration = '500ms';

    this.dialog.open(ProductListComponent, dialogConfig);
  }

  openChangeTheme(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '776px';
    dialogConfig.height = '550px';
    dialogConfig.enterAnimationDuration = '500ms';
    dialogConfig.exitAnimationDuration = '500ms';

    this.dialog.open(ChangeThemeComponent, dialogConfig);
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
