import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../../../../service/usuario.service';
import {Usuario} from '../../../../../model/Usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  ismodificar: boolean = false;
  usuarioSeleccionado: Usuario;
  visible = false;
  loading = true;
  photoUsuario: any[] = [];

  constructor(private  usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.findAll().subscribe(result => {
      this.usuarios = result;
      this.loading = false;
    });
  }

  changeModificar(usuario){
    this.ismodificar = !this.ismodificar;
    this.usuarioSeleccionado = usuario;
  }

}
