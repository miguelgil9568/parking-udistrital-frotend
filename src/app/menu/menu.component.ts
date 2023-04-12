import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  items: MenuItem[];

  constructor(
    private router: Router
  ) { }


  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-home',
        routerLink: [{ outlets: { rdash: [''] } }]
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-users',
        items: [{
            label: 'Consulta',
            icon: 'pi pi-users',
            routerLink: [{ outlets: { rdash: ['usuario'] } }]
          },
          {
            label: 'Roles',
            icon: 'pi pi-sliders-v',
            // routerLink: [{ outlets: { rdash: ['modusuario'] } }]
          }
        ]
      },
      {
        label: 'Vehiculos',
        icon: 'pi pi-fw pi-car',
        items: [
          {label: 'Consulta',
            icon: 'pi pi-car',
            routerLink: [{ outlets: { rdash: ['vehiculo'] } }]
          },
          {label: 'Agregar ',
            icon: 'pi pi-search-plus',
            routerLink: [{ outlets: { rdash: ['modvehiculo'] } }]
          }
        ]
      },
      {
        label: 'Parqueadero',
        icon: 'pi pi-fw pi-map',
        items: [
          {label: 'Consulta', icon: 'pi pi-map'}
        ]
      },
      {
        label: 'Ayuda',
        icon: 'pi pi-fw pi-question',
      },
      {
        label: 'Configuracion',
        icon: 'pi pi-fw pi-cog',
      }
    ];
  }

  logout(): void {
    sessionStorage.removeItem('token');
    //redirect to login page
    window.location.href = '/login'
    // this.router.navigate(['/login']);
  }
}
