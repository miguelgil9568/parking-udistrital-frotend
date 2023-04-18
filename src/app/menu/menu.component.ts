import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng';
import {Router} from '@angular/router';
import { RoleGuardService } from 'src/service/role-guard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  items: MenuItem[];

  constructor(
    private router: Router,
    private roleGuardService: RoleGuardService
  ) { }

  checkUserRole(roleToCheck: String): boolean {
    return this.roleGuardService.checkUserRole(roleToCheck);
  }

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-home',
        routerLink: [{ outlets: { rdash: [''] } }]
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-users',
        visible: this.validarPermisos('ROLE_ADMIN'),
        items: [{
            label: 'Consulta',
            icon: 'pi pi-users',
            routerLink: [{ outlets: { rdash: ['usuario'] } }],
            visible: this.validarPermisos('ROLE_ADMIN'),
            },{
            label: 'Agregar ',
            icon: 'pi pi-search-plus',
            routerLink: [{ outlets: { rdash: ['modusuario'] } }],
            visible: this.validarPermisos('ROLE_ADMIN'),
          },
          {
            label: 'Roles',
            icon: 'pi pi-sliders-v',
            visible: this.validarPermisos('ROLE_ADMIN'),
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
            routerLink: [{ outlets: { rdash: ['vehiculo'] } }],
            // visible: this.validarPermisos('ROLE_ADMIN'),
          },
          {label: 'Agregar ',
            icon: 'pi pi-search-plus',
            routerLink: [{ outlets: { rdash: ['modvehiculo'] } }],
          }
        ]
      },
      {
        label: 'Parqueadero',
        icon: 'pi pi-fw pi-map',
        visible: this.validarPermisos('ROLE_ADMIN'),
        items: [
          {label: 'Consulta', icon: 'pi pi-map',
            visible: this.validarPermisos('ROLE_ADMIN'),},
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

  validarPermisos(role){
    let token : any = JSON.parse(sessionStorage.getItem('token'));
    console.log('token '+ token.user);
    return token.user.authorities[0].authority == role ? true : false;

  }

  logout(): void {
    sessionStorage.removeItem('token');
    //redirect to login page
    window.location.href = '/login'
    // this.router.navigate(['/login']);
  }
}
