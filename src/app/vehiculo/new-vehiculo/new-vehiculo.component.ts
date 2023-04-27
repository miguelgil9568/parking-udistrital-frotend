import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../../model/Vehicle';
import {VehiculoService} from '../../../service/vehiculo.service';
import {Router} from '@angular/router';
import {NewVehicle} from '../../../model/NewVehicle';
import {MessageService} from 'primeng';

@Component({
  selector: 'app-new-vehiculo',
  templateUrl: './new-vehiculo.component.html',
  styleUrls: ['./new-vehiculo.component.css']
})
export class NewVehiculoComponent implements OnInit {

  crearVehiculo: FormGroup;
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
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.crearVehiculo = new FormGroup({
      placa: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      make: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      color: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      type: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      photoVehicle: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      photoLicense: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      photoIDOwner: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
    if(this.vehiculoSeleccionado != null ){
      this.setValues();
    }else {
      this.labelAccion = 'Crear';
    }
  }

  setValues(){
    this.labelAccion = 'Modificar';
    this.crearVehiculo.controls['placa'].setValue(this.vehiculoSeleccionado.placa);
    this.crearVehiculo.controls['make'].setValue(this.vehiculoSeleccionado.make);
    this.crearVehiculo.controls['color'].setValue(this.vehiculoSeleccionado.color);
    this.crearVehiculo.controls['type'].setValue(this.vehiculoSeleccionado.type);
  }


  setVehiculo(){
    // this.idVehiculo = this.vehiculoSeleccionado.id;
    this.vehiculoSeleccionado = this.crearVehiculo.value;
    this.update();
  }

  public update(): void {
    this.vehiculoSeleccionado = this.crearVehiculo.value;

    // let reader = new FileReader();
    // reader.readAsDataURL(this.photoVehicle[0]);
    // reader.onload = function () {
    //   //me.modelvalue = reader.result;
    //   console.log(reader.result);
    //   return reader.result;
    // };
    // this.vehiculoSeleccionado.bytesPhotoVehicle = reader.result;
    // console.log(this.photoVehicle[0]);
    // console.log(this.photoLicense[0]);
    // console.log(this.photoIDOwner[0]);
    // this.crearVehiculo.controls['photoVehicle'].setValue(this.photoVehicle[0]);
    // this.crearVehiculo.controls['photoIDOwner'].setValue(this.photoIDOwner[0]);
    this.vehiculoService.registerVehicle(this.vehiculoSeleccionado).subscribe(
      response => {
        console.log(response);
        this.updateEvent.emit(true);
        this.messageService.add({severity: 'success', summary: 'Usuario ' +  this.labelAccion, detail: 'Vehiculo ' + this.labelAccion + ' con exito'});
      }, error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: error.error.mensaje});
      }
    );
    console.log("vehiculo actualizado");
  }


  onUpload(event:any) {
    console.log(event)
    for ( let file of event.files) {
       this.photoVehicle.push(file);
    }
  }
  onUpload2(event:any) {
    for ( let file of event.files) {
      this.photoLicense.push(file);
    }
  }
  onUpload3(event:any) {
    for ( let file of event.files) {
      this.photoIDOwner.push(file);
    }
  }
}
