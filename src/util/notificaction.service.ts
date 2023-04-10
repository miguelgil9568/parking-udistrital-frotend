import { Injectable } from '@angular/core';
import '../assets/neon/assets/js/neon-notificaciones.js';
declare var neonNotifications: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  // ======== Normales
  info(title: string, message: string): void {
    neonNotifications.notificacionRegular(title, message, 'info');
  }

  success(title: string, message: string): void {
    neonNotifications.notificacionRegular(title, message, 'success');
  }

  error(title: string, message: string): void {
    neonNotifications.notificacionRegular(title, message, 'error');
  }

  warning(title: string, message: string): void {
    neonNotifications.notificacionRegular(title, message, 'warning');
  }

  // ======== Oscuras
  infoDark(title: string, message: string): void {
    neonNotifications.notificacionRegularOscura(title, message, 'info');
  }

  successDark(title: string, message: string): void {
    neonNotifications.notificacionRegularOscura(title, message, 'success');
  }

  errorDark(title: string, message: string): void {
    neonNotifications.notificacionRegularOscura(title, message, 'error');
  }

  warningDark(title: string, message: string): void {
    neonNotifications.notificacionRegularOscura(title, message, 'warning');
  }

  // ======== Normales Estaticas

  infoStatic(title: string, message: string): void {
    neonNotifications.notificacionRegularEstatica(title, message, 'info');
  }

  successStatic(title: string, message: string): void {
    neonNotifications.notificacionRegularEstatica(title, message, 'success');
  }

  errorStatic(title: string, message: string): void {
    neonNotifications.notificacionRegularEstatica(title, message, 'error');
  }

  warningStatic(title: string, message: string): void {
    neonNotifications.notificacionRegularEstatica(title, message, 'warning');
  }

  // ======== Oscuras Estaticas

  infoDarkStatic(title: string, message: string): void {
    neonNotifications.notificacionRegularEstaticaOscura(title, message, 'info');
  }

  successDarkStatic(title: string, message: string): void {
    neonNotifications.notificacionRegularEstaticaOscura(title, message, 'success');
  }

  errorDarkStatic(title: string, message: string): void {
    neonNotifications.notificacionRegularEstaticaOscura(title, message, 'error');
  }

  warningDarkStatic(title: string, message: string): void {
    neonNotifications.notificacionRegularEstaticaOscura(title, message, 'warning');
  }

  jsonPrettyHighlightToId(jsonToPrint: string, idDiv: string): void {
    neonNotifications.jsonPrettyHighlightToId(jsonToPrint, idDiv);
  }

}
