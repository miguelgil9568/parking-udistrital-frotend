import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {PasswordModule} from 'primeng/password';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './modules/users/pages/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'primeng/menu';
import {
  ChartModule,
  DialogModule,
  FileUploadModule, GalleriaModule,
  ListboxModule,
  MenubarModule,
  PanelModule,
  SelectButtonModule, ToastModule, MessageService, CalendarModule
} from 'primeng';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { UsuarioComponent } from './modules/users/pages/usuario/usuario.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './modules/users/pages/dashboard/dashboard.component';
import { TokenInterceptorService } from 'src/util/token-interceptor.interceptor';
import { SignInComponent } from './sign-in/sign-in.component';
import { JwtModule } from '@auth0/angular-jwt';
import {UsersModule} from './modules/users/users.module';

// ======= To get access token
export function tokenGetter() {
  return sessionStorage.getItem('token');
}


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    PasswordModule,
    MenuModule,
    MenubarModule,
    FullCalendarModule,
    AppRoutingModule,
    SelectButtonModule,
    ListboxModule,
    ChartModule,
    PanelModule,
    FileUploadModule,
    DialogModule,
    GalleriaModule,
    ToastModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    CalendarModule,
    UsersModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true},
    MessageService,
    DatePipe
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
