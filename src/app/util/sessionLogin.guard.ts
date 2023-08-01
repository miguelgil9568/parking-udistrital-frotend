import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionLoginGuard  {

  constructor(
    private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  checkCookieSession(): boolean {
    try {
      const token : boolean = JSON.parse(sessionStorage.getItem('token')) === null ;

      console.log('token'+ token)
      if (!token) {
        this.router.navigate(['/app/'])
      }
      return token;

    } catch (e) {
      console.log('Algo sucedio ?? 🔴', e);
      return false
    }

  }

}
