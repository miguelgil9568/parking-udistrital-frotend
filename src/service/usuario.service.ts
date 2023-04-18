import { HttpClient, HttpHeaders } from '@angular/common/http';
import {EventEmitter, Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EndPointsConstants } from '../util/endpointsConstants-contast';
import {Auth} from '../model/Auth';
import {Usuario} from '../model/Usuario';
import {NewUsuario} from '../model/NewUsuario';

@Injectable({
  providedIn: 'any'
})
export class UsuarioService {

  ingreso = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(EndPointsConstants.URL_ENDPOINT + 'api/user').pipe(
      tap(
        success => { return success },
        error => {
          return error;
        }
      )
    );
  }


  registerUser(newUsuario: NewUsuario): Observable<any> {
    return this.http.post<any>(EndPointsConstants.URL_ENDPOINT + 'api/user/sign-in', newUsuario).pipe(
      tap(
        success => { return success },
        error => {
          return error;
        }
      )
    );
  }

  updateUser(id, usuario: Usuario): Observable<any> {
    return this.http.put<any>(EndPointsConstants.URL_ENDPOINT + 'api/user/update/' + id, usuario).pipe(
      tap(
        success => { return success },
        error => {
          return error;
        }
      )
    );
  }


  // cambiarContra(cambiarContra: any, token: string): Observable<any> {
  //   let headers = new HttpHeaders()
  //   .set('Content-Type', 'application/json')
  //   .set('Accept', 'application/json')
  //   .set('Access-Control-Allow-Headers', 'Content-Type')
  //   .set('token', token)
  //
  //
  //   return this.http.put<any>(EndPointsConstants.URL_ENDPOINT_USUARIO + '/usuario/cambioContrasena', cambiarContra, { 'headers': headers }).pipe(
  //     tap(
  //       success => {
  //         this.popupService.modalOk('Cambio correcto', '', 'OK');
  //         return success
  //       },
  //         error => {
  //           if(error = 403){
  //             return error;
  //           }else{
  //             this.popupService.modalError('Error', 'Ha ocurrido un error al cambiar la contraseña, Inténtelo nuevamente', 'OK');
  //           }
  //
  //       }
  //     )
  //   );
  // }
  //
  // olvidoContra(olvidoContra: any): Observable<any> {
  //   return this.http.put<any>(EndPointsConstants.URL_ENDPOINT_LOGIN + '/api/v1/asignar_contrasena', olvidoContra).pipe(
  //     tap(
  //       success => {
  //         if (success?.estado != 204) {
  //           this.popupService.modalOk('Envío correcto', 'Se ha enviado la nueva contraseña', 'OK');
  //         } else if (success?.estado == 204) {
  //           this.popupService.modalError('Error', 'El usuario no se encuentra registrado en la BD, por favor verifique nuevamente.', 'OK');
  //         }
  //       },
  //       error => { this.popupService.modalError('Error', 'Ha ocurrido un error al restablecer la contraseña, Inténtelo nuevamente', 'OK') }
  //     )
  //   );
  // }
  //
  // bloquearUsuario(body: any): Observable<any> {
  //   return this.http.put<any>(EndPointsConstants.URL_ENDPOINT_LOGIN + '/api/v1/bloquear_usuario', body).pipe(
  //     tap(
  //       success => { return success },
  //       error => { return error }
  //     )
  //   );
  // }
  //
  // aumentarIntentos(body: any): Observable<any> {
  //   let cuerpo = {
  //     "nroIdentificacion": body.numeroIdentificacion,
  //     "tipoIdentificacion": body.tipoIdentificacion
  //   }
  //   return this.http.post<any>(EndPointsConstants.URL_ENDPOINT_LOGIN + '/api/v1/intentos/aumentar', cuerpo).pipe(
  //     tap(
  //       success => { return success },
  //       error => { return error }
  //     )
  //   );
  // }
  //
  // reiniciarIntentos(body: any): Observable<any> {
  //   let cuerpo = {
  //     "nroIdentificacion": body.numeroIdentificacion,
  //     "tipoIdentificacion": body.tipoIdentificacion
  //   }
  //   return this.http.post<any>(EndPointsConstants.URL_ENDPOINT_LOGIN + '/api/v1/intentos/reiniciar', cuerpo).pipe(
  //     tap(
  //       success => { return success },
  //       error => { return error }
  //     )
  //   );
  // }
  //
  // consultarIntentos(body: any): Observable<any> {
  //   let cuerpo = {
  //     "nroIdentificacion": body.numeroIdentificacion,
  //     "tipoIdentificacion": body.tipoIdentificacion
  //   }
  //   return this.http.post<any>(EndPointsConstants.URL_ENDPOINT_LOGIN + '/api/v1/intentos', cuerpo).pipe(
  //     tap(
  //       success => { return success },
  //       error => { this.popupService.modalError('Error', 'El usuario no se encuentra en la Base de datos, por favor verifique nuevamente', 'OK') }
  //     )
  //   );
  // }

}
