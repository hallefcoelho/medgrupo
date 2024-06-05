import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ThemeColorDataService } from '../../../../../_shared/service/theme-color-data.service';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrl: './change-theme.component.scss'
})
export class ChangeThemeComponent implements OnInit{
  themeColor!: string | null;

  constructor(
    private dialogRef: MatDialogRef<ChangeThemeComponent>,
    private themeColorDataService: ThemeColorDataService,
  ){}

  ngOnInit(): void {
      this.getThemeStorage();
  }

  changeTheme(theme: string){
    this.themeColor = theme;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  saveColorTheme(){
    this.themeColorDataService.setColorTheme(this.themeColor)
    this.closeModal();
  }

  getThemeStorage(){
    this.themeColor = localStorage.getItem('theme');
  }

}
