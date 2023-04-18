import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {EventEmitter, Injectable, Input} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EndPointsConstants } from '../util/endpointsConstants-contast';
import {Auth} from '../model/Auth';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'any'
})
export class LoginService {

  ingreso = new EventEmitter<boolean>();

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
  }

  login(authData: Auth): Observable<any> {
    return this.http.post<any>(EndPointsConstants.URL_ENDPOINT + 'api/login', authData).pipe(
      tap(
        success => { return success },
        error => {
          return error;
        }
      )
    );
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    // Check whether the token is expired or null and return
    // true or false
    if (token == null) {
      return false;
    } else {
      return !this.jwtHelper.isTokenExpired(token);
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);
      // console.dir(error);
    }
    // return an observable with a user-facing error message
    return throwError(
      error);
  }

  /**
   * Function to logout a user from the page
   */

  logout() {
    console.log(' on logout Service');
    sessionStorage.removeItem('token');
  }

}
