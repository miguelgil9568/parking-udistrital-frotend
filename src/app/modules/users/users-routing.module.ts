import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {UsuarioComponent} from './pages/usuario/usuario.component';
import {ModificarUsuarioComponent} from './pages/usuario/modificar-usuario/modificar-usuario.component';
import {VehiculoComponent} from './pages/vehiculo/vehiculo.component';
import {NewVehiculoComponent} from './pages/vehiculo/new-vehiculo/new-vehiculo.component';
import {ParqueaderoComponent} from './pages/parqueadero/parqueadero.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DiaryComponent} from './pages/diary/diary.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'miAgenda',
    component: DiaryComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'modusuario',
    component: ModificarUsuarioComponent,
  },
  {
    path: 'vehiculo',
    component: VehiculoComponent,
  },
  {
    path: 'modvehiculo',
    component: NewVehiculoComponent
  },
  {
    path: 'parqueadero',
    component: ParqueaderoComponent
  },
  {path: '**', redirectTo: 'app/', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
