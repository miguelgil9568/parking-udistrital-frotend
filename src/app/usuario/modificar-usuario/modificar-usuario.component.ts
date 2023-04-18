import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../../model/Vehicle';
import {Usuario} from '../../../model/Usuario';
import {Role} from '../../../model/Role';
import {UsuarioService} from '../../../service/usuario.service';
import {Route, Router} from '@angular/router';
import {MessageService} from 'primeng';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  crearUsuario: FormGroup;
  labelAccion = 'Crear';
  vehiculos: Vehicle[] = [];
  vehiculoSeleccionado: Vehicle;
  idUsuario: number;
  visible: boolean = false;

  @Input()
  usuarioSeleccionado: Usuario;

  @Output()
  updateEvent = new EventEmitter<boolean>();

  constructor(private usuarioService: UsuarioService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
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
      type: new FormControl('USER', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
    this.setValues();
  }

  setValues() {
    this.labelAccion = 'Modificar';
    this.crearUsuario.controls['name'].setValue(this.usuarioSeleccionado.name);
    this.crearUsuario.controls['password'].setValue(this.usuarioSeleccionado.password);
    this.crearUsuario.controls['code'].setValue(this.usuarioSeleccionado.code);
    this.crearUsuario.controls['phoneNumber'].setValue(this.usuarioSeleccionado.phoneNumber);
    this.crearUsuario.controls['email'].setValue(this.usuarioSeleccionado.email);
    this.crearUsuario.controls['type'].setValue(this.usuarioSeleccionado.type);
    this.vehiculos = this.usuarioSeleccionado.vehicles;
  }

  setUsuario() {
    this.idUsuario = this.usuarioSeleccionado.id;
    this.usuarioSeleccionado = this.crearUsuario.value;
    this.update();
  }

  public update(): void {
    this.usuarioService.updateUser(this.idUsuario, this.usuarioSeleccionado).subscribe(
      response => {
        console.log(response);
        this.updateEvent.emit(true);
        this.messageService.add({severity: 'success', summary: 'Usuario ' +  this.labelAccion, detail: 'Usuario ' + this.labelAccion + ' con exito'});
      }, error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: error.error.mensaje});
      }
    );
    console.log('usuario actualizado');
  }
}
