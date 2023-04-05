import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {CommonModule} from "@angular/common";
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
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'primeng/menu';
import {MenubarModule} from 'primeng';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { UsuarioComponent } from './usuario/usuario.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenInterceptorService } from 'src/util/token-interceptor.interceptor';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    UsuarioComponent,
    DashboardComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    PasswordModule,
    MenuModule,
    MenubarModule,
    FullCalendarModule,
    AppRoutingModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
