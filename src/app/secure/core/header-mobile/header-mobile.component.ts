import { UserDataService } from './../../../_shared/service/user-data.service';
import { Component } from '@angular/core';
import { ProductListComponent } from '../_shared/components/product-list/product-list.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../../_shared/models/user.model';
import { UserInterface } from '../../../_shared/interface/user.interface';
import { ChangeThemeComponent } from '../_shared/components/change-theme/change-theme.component';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {
  private unsubscribe$: Subject<void> = new Subject<void>();

  user!: User;

  constructor(
    private dialog: MatDialog,
    private userDataService: UserDataService,
  ){}

  ngOnInit(): void {
    this.getUserData();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openListProduct(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '776px';
    dialogConfig.height = '550px';
    dialogConfig.enterAnimationDuration = '500ms';
    dialogConfig.exitAnimationDuration = '500ms';
    dialogConfig.panelClass = 'dialog__container'

    this.dialog.open(ProductListComponent, dialogConfig);
  }

  openChangeTheme(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '776px';
    dialogConfig.height = '550px';
    dialogConfig.enterAnimationDuration = '500ms';
    dialogConfig.exitAnimationDuration = '500ms';
    dialogConfig.panelClass = 'dialog__container'

    this.dialog.open(ChangeThemeComponent, dialogConfig);
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
}
