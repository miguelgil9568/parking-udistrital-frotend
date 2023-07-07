import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Vehicle} from '../../../../../../model/Vehicle';
import {Usuario} from '../../../../../../model/Usuario';

@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent implements OnInit  , OnChanges{

  @Input()
  usuario: Usuario;


  vehiculoSeleccionado: Vehicle;
  idUsuario: number;
  visible: boolean;
  visibleVehiculo = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.visible = !this.visible;
  }
}
