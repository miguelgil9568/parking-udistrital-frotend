import { HttpClient, HttpHeaders } from '@angular/common/http';
import {EventEmitter, Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EndPointsConstants } from '../util/endpointsConstants-contast';
import {Auth} from '../model/Auth';
import {Vehicle} from '../model/Vehicle';
import {NewVehicle} from '../model/NewVehicle';

@Injectable({
  providedIn: 'any'
})
export class VehiculoService {

  ingreso = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(EndPointsConstants.URL_ENDPOINT + 'api/vehicle').pipe(
      tap(
        success => { return success },
        error => {
          return error;
        }
      )
    );
  }


  registerVehicle(newVehicle: NewVehicle): Observable<any> {
    return this.http.post<any>(EndPointsConstants.URL_ENDPOINT + 'api/vehicle/new-vehicle/3', newVehicle).pipe(
      tap(
        success => { return success },
        error => {
          return error;
        }
      )
    );
  }

  updateVehicle(id, vehicle: Vehicle): Observable<any> {
    return this.http.put<any>(EndPointsConstants.URL_ENDPOINT + 'api/vehicle/update/' + id, vehicle).pipe(
      tap(
        success => { return success },
        error => {
          return error;
        }
      )
    );
  }




}
