import {Component, Injectable, OnInit} from '@angular/core';
import {Car} from '../../class/Cars';
import { Auth } from 'src/model/Auth';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {LoginService} from '../../service/login.service';

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

  constructor( private formBuilder: FormBuilder,
               private loginService: LoginService) {
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
    console.log('ingreso');
    this.loginService.login(this.auth).subscribe(result =>{
      result;
    });
  }

}
