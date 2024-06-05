import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', redirectTo: '/secure', pathMatch: 'full'
  },
  {
      path: 'secure',
      loadChildren: () => import('./secure/secure.module').then((m) => m.SecureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
      preloadingStrategy: PreloadAllModules,
      useHash: true,
      paramsInheritanceStrategy: 'always'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
