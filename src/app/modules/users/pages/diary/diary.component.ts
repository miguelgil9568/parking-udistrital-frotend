import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Usuario} from '../../../../../model/Usuario';
import {UsuarioService} from '../../../../../service/usuario.service';
import {IndicadoresService} from '../../../../../service/Indicadores.service';
import {Visit} from '../../../../../model/Visit';
import {VehiculoService} from '../../../../../service/vehiculo.service';
import {Vehicle} from '../../../../../model/Vehicle';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit, AfterViewInit {

  reservas: Visit[];
  loading = true;
  vehiculos: Array<Vehicle> = new Array<Vehicle>();

  constructor(
    private  usuarioService: UsuarioService,
    private  indicadoresService: IndicadoresService,
    public  vehiculoService: VehiculoService
  ) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.usuarioService.findAllbyEmail(JSON.parse(sessionStorage.getItem('token')).username).subscribe(value => {
      this.vehiculoService.findAllbyUser(value.id).subscribe(result => {
        this.vehiculos = result;
        this.indicadoresService.findVisitxUser(value.id).subscribe(result => {
          this.reservas = result;
          this.loading = false;
        });
      });
    });
  }

  public findVehiculo(idvehiculo): string{
    setTimeout(()=>{
    },3500);

    return this.vehiculos.filter(s=> {
      return s.id == idvehiculo;
    })[0].placa
  }



}
