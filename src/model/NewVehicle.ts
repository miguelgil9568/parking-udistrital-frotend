import {Usuario} from './Usuario';

export interface NewVehicle {
  codeUser: string;
  id: number;
  type: string;
  make: string;
  placa: number;
  color: string;
  namePhotoVehicle: string;
  bytesPhotoVehicle: string| ArrayBuffer;
  namePhotoLicense: string;
  bytesPhotoLicense: string;
  namePhotoIDOwner: string;
  bytesPhotoIDOwner: string;
  createAt: Date;
  modified: Date;
  user: Usuario;
}
