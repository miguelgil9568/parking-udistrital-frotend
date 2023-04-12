import {Usuario} from './Usuario';

export interface NewVehicle {
  codeUser: string;
  type: string;
  make: string;
  placa: number;
  color: string;
  photoVehicle: string;
  photoLicense: string;
  photoIDOwner: string;
  createAt: Date;
  modified: Date;
  user: Usuario;
}
