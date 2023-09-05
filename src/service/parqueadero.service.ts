import { HttpClient, HttpHeaders } from '@angular/common/http';
import {EventEmitter, Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EndPointsConstants } from '../util/endpointsConstants-contast';
import {Auth} from '../model/Auth';
import {Parqueadero} from '../model/Parqueadero';

@Injectable({
  providedIn: 'any'
})
export class ParqueaderoService {

  ingreso = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Parqueadero[]> {
    return this.http.get<Parqueadero[]>(  EndPointsConstants.URL_ENDPOINT + 'api/parking-lot').pipe(
      tap(
        (success: any) => { return success;},
        error => {
          return error;
        }
      )
    );
  }

}
