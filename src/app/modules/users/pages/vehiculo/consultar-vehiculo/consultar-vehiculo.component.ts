import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Vehicle} from '../../../../../../model/Vehicle';
import {EndPointsConstants} from '../../../../../../util/endpointsConstants-contast';

@Component({
  selector: 'app-consultar-vehiculo',
  templateUrl: './consultar-vehiculo.component.html',
  styleUrls: ['./consultar-vehiculo.component.css']
})
export class ConsultarVehiculoComponent implements OnInit , OnChanges{

  @Input()
  vehiculo: Vehicle;

  visible: boolean;

  url= EndPointsConstants.URL_ENDPOINT_FILE;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.visible = true;
  }

}
