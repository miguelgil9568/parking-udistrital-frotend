import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UsuarioComponent} from './pages/usuario/usuario.component';
import {ModificarUsuarioComponent} from './pages/usuario/modificar-usuario/modificar-usuario.component';
import {VehiculoComponent} from './pages/vehiculo/vehiculo.component';
import {NewVehiculoComponent} from './pages/vehiculo/new-vehiculo/new-vehiculo.component';
import {ConsultarVehiculoComponent} from './pages/vehiculo/consultar-vehiculo/consultar-vehiculo.component';
import {ConsultarUsuarioComponent} from './pages/usuario/consultar-usuario/consultar-usuario.component';
import {ParqueaderoComponent} from './pages/parqueadero/parqueadero.component';
import {IndicadorComponent} from './pages/indicador/indicador.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import {PasswordModule} from 'primeng/password';
import {MenuModule} from 'primeng/menu';
import {
  CalendarModule,
  ChartModule,
  DialogModule,
  FileUploadModule,
  GalleriaModule,
  ListboxModule,
  MenubarModule, MessageService,
  PanelModule,
  SelectButtonModule, ToastModule
} from 'primeng';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {MenuComponent} from '../../menu/menu.component';
import {HomeComponent} from './pages/home/home.component';
import { DiaryComponent } from './pages/diary/diary.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    MenuComponent,
    UsuarioComponent,
    ModificarUsuarioComponent,
    VehiculoComponent,
    NewVehiculoComponent,
    ConsultarVehiculoComponent,
    ConsultarUsuarioComponent,
    ParqueaderoComponent,
    IndicadorComponent,
    DiaryComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    PasswordModule,
    MenuModule,
    MenubarModule,
    FullCalendarModule,
    SelectButtonModule,
    ListboxModule,
    ChartModule,
    PanelModule,
    FileUploadModule,
    DialogModule,
    GalleriaModule,
    ToastModule,
    CalendarModule,
  ], exports: [
    DashboardComponent,
    UsuarioComponent,
    ModificarUsuarioComponent,
    VehiculoComponent,
    NewVehiculoComponent,
    ConsultarVehiculoComponent,
    ConsultarUsuarioComponent,
    ParqueaderoComponent,
    IndicadorComponent,
    DiaryComponent
  ]
})
export class UsersModule { }
