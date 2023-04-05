import {Component, Injectable, OnInit} from '@angular/core';
import {Car} from '../../class/Cars';
import { Auth } from 'src/model/Auth';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {LoginService} from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {


  title = 'parking-udistrital-frontend';
  auth: Auth;
  cols: any[];
  username = '';
  password = '';
  formLogin: FormGroup;
  viewLogin= false;
  viewHome= true;
  item: any;

  constructor( private formBuilder: FormBuilder,
               private loginService: LoginService,
               private router: Router) {
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  public login(){
    console.log('ingreso');
    this.auth = this.formLogin.value;
    this.loginService.login(this.auth).subscribe(result =>{
      this.router.navigate(['/app/dashboard']);
      sessionStorage.setItem('token', result.token);
      this.viewHome= false;
      this.viewLogin= true;
    });
  }

  cambio(){
    console.log('ingreso');
    this.viewHome= false;
    this.viewLogin= true;
    this.router.navigate(['/sign']);
  }

}
