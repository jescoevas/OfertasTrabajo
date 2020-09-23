import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{

  form:FormGroup

  constructor(private usuarioService:UsuarioService, private router:Router, private builder:FormBuilder) { 
    this.iniciarFormulario()
  }

  iniciarFormulario(){
    this.form = this.builder.group({
      usuario:['', [Validators.required, Validators.minLength(6)]],
      password:['', [Validators.required, Validators.minLength(6)]],
    })
  }

  registro(){

  }

}
