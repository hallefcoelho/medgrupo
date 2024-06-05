import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductList } from '../../../../../_shared/models/product-list.model';
import { ToastrService } from 'ngx-toastr';
import { ThemeColorDataService } from '../../../../../_shared/service/theme-color-data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  themeColor!: string | null;

  constructor(
    private dialogRef: MatDialogRef<ProductListComponent>,
    private toastr: ToastrService,
    private themeColorDataService: ThemeColorDataService,
  ){}

  ngOnInit(): void {
    this.getThemeStorage();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  productSelected(description: string){
    this.dialogRef.close();
    this.toastr.success(`Você selecionou o produto ${description}`,'Sucesso');
  }

  closeModal(): void {
    this.dialogRef.close();
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
