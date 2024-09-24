import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../../../../../model/Vehicle';
import { VehiculoService } from 'src/service/vehiculo.service';
import {EndPointsConstants} from '../../../../../util/endpointsConstants-contast';
import {Image} from '../../../../../model/image';
import {UsuarioService} from '../../../../../service/usuario.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  vehiculos: Vehicle[];
  vehiculo: Vehicle;
  ismodificar: boolean = false;
  vehiculoSeleccionado: Vehicle;
  images: any[]= [] ;
  data : any;
  display: boolean = false;
  labelTitulo= 'Vehiculos'


  constructor(private vehiculoService: VehiculoService,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    if(!this.validarPermisos()){
      this.labelTitulo = 'Mis vehiculos';
      this.usuarioService.findAllbyEmail(JSON.parse(sessionStorage.getItem('token')).username).subscribe(value => {
        this.vehiculoService.findAllbyUser(value.code).subscribe(result => {
          this.vehiculos = result;
        });
      })
    }else{
      this.vehiculoService.findAll().subscribe(result => {
        this.vehiculos = result;
      });
    }
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

  showDialog(vehiculo: Vehicle) {
    this.display = true;
    this.images = [];
    this.vehiculo=vehiculo;
    console.log(EndPointsConstants.URL_ENDPOINT_FILE +vehiculo.photoVehicle)
    let image : any = {
      previewImageSrc: EndPointsConstants.URL_ENDPOINT_FILE +vehiculo.photoVehicle,
      thumbnailImageSrc: EndPointsConstants.URL_ENDPOINT_FILE +vehiculo.photoVehicle,
      alt: "Foto de registro del vehiculo\"",
      title: "Vehiculo"
    }
    this.images.push(image);
    // let image2: Image;
    // image2.ImageSrc = EndPointsConstants.URL_ENDPOINT_FILE +vehiculo.photoLicense;
    // image2.lImageSrc= EndPointsConstants.URL_ENDPOINT_FILE +vehiculo.photoLicense;
    // image2.alt = "Foto de registro de la licencia del vehiculo ";
    // image2.title= "Licencia";
    // this.images.push(image2);
    // let image3: Image;
    // image3.ImageSrc = EndPointsConstants.URL_ENDPOINT_FILE +vehiculo.photoIDOwner;
    // image3.lImageSrc= EndPointsConstants.URL_ENDPOINT_FILE +vehiculo.photoIDOwner;
    // image3.alt = "Foto de registro del carnet estudiantil ";
    // image3.title= "Carnet estuantil";
    // this.images.push(image3);
    // console.log(JSON.stringify(this.images));
  }

  changeModificar(vehiculo){
    this.ismodificar = !this.ismodificar;
    this.vehiculoSeleccionado = vehiculo;
  }
}
