import {Role} from './Role';
import {Vehicle} from './Vehicle';

export interface Usuario {
  id: number;
  photo: null;
  name: string;
  type: string;
  password: string;
  code: string;
  phoneNumber: null;
  enable: boolean;
  email: string;
  createAt: Date;
  modified: Date;
  role: Role[];
  vehicles: Vehicle[];
  username: string;
}
