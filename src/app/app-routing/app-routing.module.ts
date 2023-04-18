import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {UsuarioComponent} from '../usuario/usuario.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {ModificarUsuarioComponent} from '../usuario/modificar-usuario/modificar-usuario.component';
import {VehiculoComponent} from '../vehiculo/vehiculo.component';
import {NewVehiculoComponent} from '../vehiculo/new-vehiculo/new-vehiculo.component';
import {RoleGuardService} from '../../service/role-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'app/dashboard', component: DashboardComponent,
    children: [
      {path: '', component: HomeComponent, outlet: 'rdash'},
      {path: 'usuario', component: UsuarioComponent, outlet: 'rdash'},
      {path: 'modusuario', component: ModificarUsuarioComponent,  outlet: 'rdash'},
      {path: 'vehiculo', component: VehiculoComponent,  outlet: 'rdash'},
      {path: 'modvehiculo', component: NewVehiculoComponent,  outlet: 'rdash'},
      // {path: ':gestor/crear-gestor', component: CrearGestorComponent, outlet: 'rdash'},
      // {path: 'usuario-admin', component: CrearUsuarioAdminComponent, outlet: 'rdash'},
      // {path: 'consultar-usuarios-admin', component: ConsultarUsuariosComponent, outlet: 'rdash'},
      // {path: 'consultar-usuarios-entrega', component: ConsultarUsuariosEntregaComponent, outlet: 'rdash'},
      // {path: 'consultar-entrega', component: ConsultarEntregaComponent, outlet: 'rdash'},
      // {path: 'consultar-reporte', component: ReportesComponent, outlet: 'rdash'}
    ],
    data: {
      roles: ['ROLE_USER']
    }
  },
  { path: 'sign', component: SignInComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
