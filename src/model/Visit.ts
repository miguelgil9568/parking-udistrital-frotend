import {Role} from './Role';
import {Vehicle} from './Vehicle';

export class Visit {
  id: number;
  idstatus: number;
  iduser: number;
  idvehicle: number;
  idparkinglot: number;
  idoper: number;
  created: Date;
  entryuser: string;
  exituser: string;
  minutesparking: number;
}
