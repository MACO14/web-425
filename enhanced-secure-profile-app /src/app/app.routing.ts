/**
 * Title: app.routing.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 07 April 2024
 * Description: Routing file
 */

import { SignInComponent } from "./sign-in/sign-in.component";
import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }
]
