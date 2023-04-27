import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';
import {UsuarioService} from '../../service/usuario.service';
import {NewUsuario} from '../../model/NewUsuario';
import {MessageService} from 'primeng';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  newUsuario: NewUsuario;

  formRegister: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  register(){
    this.newUsuario = this.formRegister.value;
    this.usuarioService.registerUser(this.newUsuario).subscribe(result => {
      console.log('Usuario creado');
      this.router.navigate(['/login']);
      this.messageService.add({severity:'success', summary: 'Registro exitoso', detail: 'El usuario se ha registrado con exito'});
    },error=> {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Clave o usuario incorrecto'});
    });
  }

  atras(){
    this.router.navigate(['/login']);
  }

}
