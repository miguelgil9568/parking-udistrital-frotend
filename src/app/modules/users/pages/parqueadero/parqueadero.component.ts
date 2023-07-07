import { Component, OnInit } from '@angular/core';
import {Parqueadero} from '../../../../../model/Parqueadero';
import {UsuarioService} from '../../../../../service/usuario.service';
import {ParqueaderoService} from '../../../../../service/parqueadero.service';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent implements OnInit {

  parqueaderos: Parqueadero[];
  parqueadero: Parqueadero;
  ismodificar: boolean = false;
  parqueaderoSeleccionado: Parqueadero;
  images: any[]= [] ;
  data : any;
  display: boolean = false;


  constructor(private parqueaderoService: ParqueaderoService,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {
      debugger;
      this.parqueaderoService.findAll().subscribe(result => {
        this.parqueaderos = result;
      });
    //  = [
    //   { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
    //   { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
    //   { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
    //   { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
    //   { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
    //   { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
    //   { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
    //   { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
    //   { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
    //   { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
    // ];
  }

  validarPermisos(){
    let token : any = JSON.parse(sessionStorage.getItem('token'));
    console.log('token '+ token.user);
    return token.user.authorities[0].authority == 'ROLE_ADMIN' ? true : false;

  }

  showDialog(parqueadero: Parqueadero) {
    this.display = true;
    this.images = [];
    this.parqueadero = parqueadero;
    // console.log(EndPointsConstants.URL_ENDPOINT_FILE +parqueadero.photoParqueadero)
    // let image : any = {
    //   previewImageSrc: EndPointsConstants.URL_ENDPOINT_FILE +parqueadero.photoParqueadero,
    //   thumbnailImageSrc: EndPointsConstants.URL_ENDPOINT_FILE +parqueadero.photoParqueadero,
    //   alt: "Foto de registro del parqueadero\"",
    //   title: "Vehiculo"
    // }
    // this.images.push(image);
  }

  changeModificar(parqueadero){
    this.ismodificar = !this.ismodificar;
    this.parqueaderoSeleccionado = parqueadero;
  }
}
