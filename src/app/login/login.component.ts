import {AfterViewInit, Component, Injectable, OnInit} from '@angular/core';
import {Car} from '../../class/Cars';
import { Auth } from 'src/model/Auth';
import { UntypedFormGroup, UntypedFormBuilder, Validators, UntypedFormControl } from '@angular/forms';
import {LoginService} from '../../service/login.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/util/notificaction.service';
import {MessageService} from 'primeng';
import {IndicadorComponent} from '../indicador/indicador.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit, AfterViewInit {


  title = 'parking-udistrital-frontend';
  auth: Auth;
  cols: any[];
  username = '';
  password = '';
  formLogin: UntypedFormGroup;
  viewLogin: boolean;
  viewHome: boolean;
  item: any;

  constructor( private formBuilder: UntypedFormBuilder,
               private loginService: LoginService,
               private router: Router,
               private notificationsService: NotificationsService,
               private messageService: MessageService,
               private indicadorComponent: IndicadorComponent) {
  }

  ngOnInit() {
    this.viewHome= true;
    this.viewLogin= false;
    this.formLogin = this.formBuilder.group({
      username: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),

      ]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  ngAfterViewInit() {
      if ((sessionStorage.getItem('token')) !== null ) {
        this.viewHome= false;
        this.viewLogin= true;
        this.router.navigate(['/app/dashboard']);
        return true;
      } else {
        this.viewHome= true;
        this.viewLogin= false;
        return false;
      }
  }

  public login(){
    this.indicadorComponent.showSpinner(true);

    console.log('ingreso');
    this.auth = this.formLogin.value;
    this.loginService.login(this.auth).subscribe(result =>{
      this.router.navigate(['/app/dashboard']);
      sessionStorage.setItem('token', JSON.stringify(result));
      this.viewHome= false;
      this.viewLogin= true;
      this.notificationsService.info('Usuario correcto',  result.mensaje);
        this.indicadorComponent.showSpinner(false);
        this.messageService.add({severity:'success', summary: 'Bienvenido', detail: 'Bienvenido al sistema'});
    },error => {
      this.indicadorComponent.showSpinner(false);
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Clave o usuario incorrecto'});
      console.log('Error');
     }
    );
  }

  cambio(){
    console.log('ingreso');
    this.viewHome= false;
    this.viewLogin= true;
    this.router.navigate(['/sign']);
  }

}
