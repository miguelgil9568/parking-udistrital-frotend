import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../../model/Vehicle';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  crearGestor: FormGroup;
  labelAccion = 'Crear';
  vehiculos: Vehicle[] = [];

  constructor() { }

  ngOnInit(): void {

    this.crearGestor = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ])
    });
  }
}
