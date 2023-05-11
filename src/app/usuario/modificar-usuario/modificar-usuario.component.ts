import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../../model/Vehicle';
import {Usuario} from '../../../model/Usuario';
import {Role} from '../../../model/Role';
import {UsuarioService} from '../../../service/usuario.service';
import {Route, Router} from '@angular/router';
import {MessageService} from 'primeng';
import {NewUsuario} from '../../../model/NewUsuario';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  crearUsuario: UntypedFormGroup;
  labelAccion = 'Crear';
  vehiculos: Vehicle[] = [];
  vehiculoSeleccionado: Vehicle;
  idUsuario: number;
  visible: boolean = false;
  photoUsuario: File;

  @Input()
  usuarioSeleccionado: Usuario;

  @Output()
  updateEvent = new EventEmitter<boolean>();

  constructor(private usuarioService: UsuarioService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.crearUsuario = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      code: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      phoneNumber: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      type: new UntypedFormControl('USER', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
    this.setValues();
  }

  setValues() {
    if(this.usuarioSeleccionado != null){
      this.labelAccion = 'Modificar';
      this.crearUsuario.controls['name'].setValue(this.usuarioSeleccionado.name);
      this.crearUsuario.controls['code'].setValue(this.usuarioSeleccionado.code);
      this.crearUsuario.controls['phoneNumber'].setValue(this.usuarioSeleccionado.phoneNumber);
      this.crearUsuario.controls['email'].setValue(this.usuarioSeleccionado.email);
      this.crearUsuario.controls['type'].setValue(this.usuarioSeleccionado.type);
      this.vehiculos = this.usuarioSeleccionado.vehicles;
    }
  }

  setUsuario() {
    this.idUsuario = this.usuarioSeleccionado.id;
    this.usuarioSeleccionado = this.crearUsuario.value;
    this.update();
  }



  crear(){
    let newUser: NewUsuario = this.crearUsuario.value;
    console.log('this.photoUsuario = '+ JSON.stringify(this.photoUsuario));

    let formData = new FormData();
    formData.append('file', this.photoUsuario);
    console.log('formData = ' + JSON.stringify(formData));
    let photo: any = {
      "file": this.photoUsuario,
    };
    newUser.Photo = photo;
    this.usuarioService.registerNewUser(newUser, formData).subscribe(
      response => {
        console.log(response.id);
        this.usuarioService.upload(response.id,'user', formData).subscribe(result => {
          this.updateEvent.emit(true);
          this.messageService.add({severity: 'success', summary: 'Usuario ' +  this.labelAccion, detail: 'Usuario ' + this.labelAccion + ' con exito'});
        });
      }, error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: error.error.mensaje});
      }
    );
  }

  public update(): void {
    let formData = new FormData();
    formData.append('file', this.photoUsuario);
    console.log('this.photoUsuario = '+ JSON.stringify(this.photoUsuario));
    this.usuarioService.updateUser(this.idUsuario, this.usuarioSeleccionado).subscribe(
      response => {
        console.log(response);
        this.usuarioService.upload(response.Usuario.id, 'user' , formData).subscribe(result => {
          this.updateEvent.emit(true);
          this.messageService.add({severity: 'success', summary: 'Usuario ' +  this.labelAccion, detail: 'Usuario ' + this.labelAccion + ' con exito'});
        });
      }, error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: error.error.mensaje});
      }
    );
    console.log('usuario actualizado');
  }

  onUpload(event:any) {
    console.log(event);
    for ( let file of event.files) {
      this.photoUsuario = file;
    }
  }
}
