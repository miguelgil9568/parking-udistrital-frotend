import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vehicle} from '../../../model/Vehicle';
import {VehiculoService} from '../../../service/vehiculo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-vehiculo',
  templateUrl: './new-vehiculo.component.html',
  styleUrls: ['./new-vehiculo.component.css']
})
export class NewVehiculoComponent implements OnInit {

  crearVehiculo: FormGroup;
  labelAccion = 'Crear';
  idVehiculo: number;
  uploadedFiles: any[] = [];


  @Input()
  vehiculoSeleccionado: Vehicle;

  @Output()
  updateEvent = new EventEmitter<boolean>();

  constructor(private vehiculoService: VehiculoService,
              private router: Router) { }

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
    this.setValues();
  }

  setValues(){
    this.labelAccion = 'Modificar';
    this.crearVehiculo.controls['placa'].setValue(this.vehiculoSeleccionado.placa);
    this.crearVehiculo.controls['make'].setValue(this.vehiculoSeleccionado.make);
    this.crearVehiculo.controls['color'].setValue(this.vehiculoSeleccionado.color);
    this.crearVehiculo.controls['type'].setValue(this.vehiculoSeleccionado.type);
    this.crearVehiculo.controls['photoVehicle'].setValue(this.vehiculoSeleccionado.photoVehicle);
    this.crearVehiculo.controls['photoLicense'].setValue(this.vehiculoSeleccionado.photoLicense);
    this.crearVehiculo.controls['photoIDOwner'].setValue(this.vehiculoSeleccionado.photoIDOwner);
  }

  setVehiculo(){
    this.idVehiculo = this.vehiculoSeleccionado.id;
    this.vehiculoSeleccionado = this.crearVehiculo.value;
    this.update();
  }

  public update(): void {
    this.vehiculoService.registerVehicle(this.vehiculoSeleccionado).subscribe(
      response => {
        console.log(response);
        this.updateEvent.emit(true);
      }
    );
    console.log("vehiculo actualizado");
  }

  onUpload(event) {
    for ( let file of event.files) {
      this.uploadedFiles.push(file);
    }

  }
}
