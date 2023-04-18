import { HttpClient, HttpHeaders } from '@angular/common/http';
import {EventEmitter, Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EndPointsConstants } from '../util/endpointsConstants-contast';
import {Auth} from '../model/Auth';
import {Usuario} from '../model/Usuario';
import {NewUsuario} from '../model/NewUsuario';
import {StattusCapacity} from '../model/StattusCapacity';

@Injectable({
  providedIn: 'any'
})
export class IndicadoresService {

  ingreso = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {
  }

  vehiculos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(EndPointsConstants.URL_ENDPOINT + 'api/visits/vehicle').pipe(
      tap(
        success => { return success },
        error => {
          return error;
        }
      )
    );
  }

  capacity(): Observable<StattusCapacity[]> {
    return this.http.get<StattusCapacity[]>(EndPointsConstants.URL_ENDPOINT + 'api/visits/capacity-status').pipe(
      tap(
        success => {
          return success;
        },
        error => {
          return error;
        }
      )
    );
  }


  usuarios(): Observable<any> {
    return this.http.get<any>(EndPointsConstants.URL_ENDPOINT + 'api/visits/user').pipe(
      tap(
        success => { return success },
        error => {
          return error;
        }
      )
    );
  }


}
