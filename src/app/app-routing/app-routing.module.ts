import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../modules/users/pages/home/home.component';
import {UsuarioComponent} from '../modules/users/pages/usuario/usuario.component';
import {DashboardComponent} from '../modules/users/pages/dashboard/dashboard.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {ModificarUsuarioComponent} from '../modules/users/pages/usuario/modificar-usuario/modificar-usuario.component';
import {VehiculoComponent} from '../modules/users/pages/vehiculo/vehiculo.component';
import {NewVehiculoComponent} from '../modules/users/pages/vehiculo/new-vehiculo/new-vehiculo.component';
import {RoleGuardService} from '../../service/role-guard.service';
import {ParqueaderoComponent} from '../modules/users/pages/parqueadero/parqueadero.component';
import {SessionGuard} from '../app-routing/session.guard'
import { SessionLoginGuard } from './sessionLogin.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [SessionLoginGuard]},
  {
    path: 'app',
    component: DashboardComponent,
    loadChildren:() => import('src/app/modules/users/users.module').then(m => m.UsersModule),
    canActivate: [SessionGuard]
  },
  {path: 'sign', component: SignInComponent, canActivate: [SessionLoginGuard]},
  {path: '**', redirectTo: '/login', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
