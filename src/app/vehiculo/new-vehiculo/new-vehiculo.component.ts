import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../../model/Vehicle';
import {VehiculoService} from '../../../service/vehiculo.service';
import {Router} from '@angular/router';
import {NewVehicle} from '../../../model/NewVehicle';
import {MessageService} from 'primeng';
import {UsuarioService} from '../../../service/usuario.service';

@Component({
  selector: 'app-new-vehiculo',
  templateUrl: './new-vehiculo.component.html',
  styleUrls: ['./new-vehiculo.component.css']
})
export class NewVehiculoComponent implements OnInit {

  crearVehiculo: UntypedFormGroup;
  labelAccion = 'Crear';
  idVehiculo: number;
  photoVehicle: any[] = [];
  photoLicense: any[] = [];
  photoIDOwner: any[] = [];


  @Input()
  vehiculoSeleccionado: NewVehicle;

  @Output()
  updateEvent = new EventEmitter<boolean>();

  constructor(private vehiculoService: VehiculoService,
              private router: Router,
              private usuarioService: UsuarioService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.crearVehiculo = new UntypedFormGroup({
      placa: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      make: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      color: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      type: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
    this.setValues();
  }

  setValues() {
    if (this.vehiculoSeleccionado != null) {
      this.labelAccion = 'Modificar';
      this.crearVehiculo.controls['placa'].setValue(this.vehiculoSeleccionado.placa);
      this.crearVehiculo.controls['make'].setValue(this.vehiculoSeleccionado.make);
      this.crearVehiculo.controls['color'].setValue(this.vehiculoSeleccionado.color);
      this.crearVehiculo.controls['type'].setValue(this.vehiculoSeleccionado.type);
    }
  }


  setVehiculo() {
    // this.idVehiculo = this.vehiculoSeleccionado.id;
    if (this.vehiculoSeleccionado != null) {
      this.update();
    } else {
      this.create();
    }
  }

  public update(): void {
    let vehiculo = this.crearVehiculo.value;
    this.vehiculoService.updateVehicle(this.vehiculoSeleccionado.id, vehiculo).subscribe(
      response => {
        console.log(response);
        let formData = new FormData();
        formData.append('file', this.photoVehicle[0]);
        this.usuarioService.upload(response.id, 'photoVehicle', formData).subscribe(result => {
          formData = new FormData();
          formData.append('file', this.photoLicense[0]);
          this.usuarioService.upload(response.id, 'photoLicense', formData).subscribe(result => {
            formData = new FormData();
            formData.append('file', this.photoIDOwner[0]);
            this.usuarioService.upload(response.id, 'photoIDOwner', formData).subscribe(result => {
              this.updateEvent.emit(true);
            });
          });
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Usuario ' + this.labelAccion,
          detail: 'Usuario ' + this.labelAccion + ' con exito'
        });
      }, error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: error.error.mensaje});
      }
    );

    console.log('vehiculo actualizado');
  }

  public create(): void {
    this.vehiculoSeleccionado = this.crearVehiculo.value;
    this.usuarioService.findAllbyEmail(JSON.parse(sessionStorage.getItem('token')).username).subscribe(value => {
      this.vehiculoService.registerVehicle(value.id, this.vehiculoSeleccionado).subscribe(
        response => {
          console.log(response);
          let formData = new FormData();
          formData.append('file', this.photoVehicle[0]);
          this.usuarioService.upload(response.id, 'photoVehicle', formData).subscribe(result => {
            formData = new FormData();
            formData.append('file', this.photoLicense[0]);
            this.usuarioService.upload(response.id, 'photoLicense', formData).subscribe(result => {
              formData = new FormData();
              formData.append('file', this.photoIDOwner[0]);
              this.usuarioService.upload(response.id, 'photoIDOwner', formData).subscribe(result => {
                this.updateEvent.emit(true);
              });
            });
          });
          this.messageService.add({
            severity: 'success',
            summary: 'Usuario ' + this.labelAccion,
            detail: 'Usuario ' + this.labelAccion + ' con exito'
          });
        }, error => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: error.error.mensaje});
        }
      );

    });
  }


  onUpload(event: any) {
    console.log(event);
    for (let file of event.files) {
      this.photoVehicle.push(file);
    }
  }

  onUpload2(event: any) {
    for (let file of event.files) {
      this.photoLicense.push(file);
    }
  }

  onUpload3(event: any) {
    for (let file of event.files) {
      this.photoIDOwner.push(file);
    }
  }
}
