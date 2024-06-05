import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  {
    path: '',
        component: SecureComponent,
        children: [
          {
            path: '', redirectTo: 'home', pathMatch: 'full'
          },
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
            }
          ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
