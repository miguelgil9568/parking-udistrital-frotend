import { Component, OnInit } from '@angular/core';
import {IndicadoresService} from '../../service/Indicadores.service';
import {Message, MessageService} from 'primeng';
import {StattusCapacity} from '../../model/StattusCapacity';
import {VehiculoService} from '../../service/vehiculo.service';
import {UsuarioService} from '../../service/usuario.service';
import {Vehicle} from '../../model/Vehicle';
import {Visit} from '../../model/Visit';
import {Usuario} from '../../model/Usuario';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataUsuarios: any;
  dataParkings: any[] = [];
  valores: StattusCapacity[] = [];
  visible = false;
  parkingSeleccionado: any = {};
  vehiculos: Vehicle[];
  vehiculoSeleccionado: number = null ;
  dateSeleccionado: Date = new Date();
  horaSeleccionado: Date = new Date();
  dateHoy: Date = new Date();
  visit: Visit = new Visit();
  user: Usuario;

  constructor(private indicadoresService: IndicadoresService,
              private messageService: MessageService,
              private vehiculoService: VehiculoService,
              private usuarioService: UsuarioService,
              public  datePipe: DatePipe
              ) { }

  ngOnInit(): void {
    this.usuarioService.findAllbyEmail(JSON.parse(sessionStorage.getItem('token')).username).subscribe(value => {
      this.user = value;
      this.vehiculoService.findAllbyUser(value.code).subscribe(result => {
        this.vehiculos = result;
      });
    });
    this.graficas();
    this.indicadoresService.usuarios().subscribe(
      result => {
            this.dataUsuarios = {
              labels: ['Disponible','Ocupado','Agendado'],
              datasets: [
                {
                  data: [300, 50, 100],
                  backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                  ]
                }]
            };
      });
  }

  mostrarDialogo(parking: any){
    this.visible = true;
    this.parkingSeleccionado = parking;
    this.dateSeleccionado = new Date();

  }

  reservar(){
    this.visit.entryuser = this.datePipe.transform(this.dateSeleccionado, 'yyyy-MM-dd hh:mm:ss') ;
    this.visit.exituser = this.datePipe.transform(this.horaSeleccionado, 'yyyy-MM-dd hh:mm:ss');
    this.visit.iduser =  this.user.id;
    this.visit.idvehicle =  this.vehiculoSeleccionado;
    this.visit.idparkinglot =  this.parkingSeleccionado.id;
    this.visit.idoper =  1;
    this.indicadoresService.newVisit(this.visit).subscribe(result => {
      this.visible = false;
      this.messageService.add({severity: 'success', summary: ' Reserva agendada con exito',  detail: 'Por favor acercarse el dia y hora asignado'});
      this.graficas();
    });
  }

  graficas(){
    this.dataParkings = [];
    this.indicadoresService.capacity().subscribe(
      (result: any) => {
        console.log(result);
        let capa: any;
        this.valores = result;
        for (let capacity of result ){
          capa = {
            id: capacity.idParking,
            name: capacity.nameParking,
            labels: ['Disponible', 'Ocupado', 'Agendado'],
            datasets: [
              {
                data: [capacity.available, capacity.busy, capacity.reserved],
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ],
                hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ]
              }]
          };
          this.dataParkings.push(capa);
        }

      },error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: error.error.mensaje});
      }
    );

  }
}
