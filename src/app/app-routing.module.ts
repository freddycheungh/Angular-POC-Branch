import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAboutComponent } from './pages/about/about.component';
import { AppLandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: AppLandingComponent
  },
  {
    path: 'about',
    component: AppAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
