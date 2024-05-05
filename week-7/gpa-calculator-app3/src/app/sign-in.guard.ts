/**
 * Title: sign-in-guard.ts
 * Author: Mackenzie Lubben-Ortiz
 * Date: 30 April 2024
 * Description: sign-in-guard
 */

import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class SignInGuard {

  constructor(private router: Router, private cookieService: CookieService) {

  }

  CanActivateFn(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sessionUser = this.cookieService.get('session_user');

    if(sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }

};
