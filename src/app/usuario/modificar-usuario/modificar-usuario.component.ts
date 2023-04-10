import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../../model/Vehicle';
import {Usuario} from '../../../model/Usuario';
import {Role} from '../../../model/Role';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  crearUsuario: FormGroup;
  labelAccion = 'Crear';
  vehiculos: Vehicle[] = [];
  roles: string[];

  @Input()
  usuarioSeleccionado: Usuario;

  constructor() { }

  ngOnInit(): void {
    this.roles = ['USER', 'ADMIN'];
    this.crearUsuario = new FormGroup({
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
      ]),
      role: new FormControl('USER', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
    this.setValues();
  }

  setValues(){
    this.labelAccion = 'Modificar';
    this.crearUsuario.controls['name'].setValue(this.usuarioSeleccionado.name);
    this.crearUsuario.controls['password'].setValue(this.usuarioSeleccionado.password);
    this.crearUsuario.controls['code'].setValue(this.usuarioSeleccionado.code);
    this.crearUsuario.controls['phoneNumber'].setValue(this.usuarioSeleccionado.phoneNumber);
    this.crearUsuario.controls['email'].setValue(this.usuarioSeleccionado.email);
    this.crearUsuario.controls['role'].setValue(this.usuarioSeleccionado.role[0].nameRole);
    this.vehiculos = this.usuarioSeleccionado.vehicles;
  }
}
