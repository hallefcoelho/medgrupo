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
            },
            {
                path: 'contents',
                loadChildren: () => import('./content/contents.module').then((m) => m.ContentsModule)
            },
            {
                path: 'mentoring',
                loadChildren: () => import('./mentoring/mentoring.module').then((m) => m.MentoringModule)
            },
            {
                path: 'training',
                loadChildren: () => import('./training/training.module').then((m) => m.TrainingModule)
            },
            {
                path: 'metrics',
                loadChildren: () => import('./metrics/metrics.module').then((m) => m.MetricsModule)
            },
          ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
