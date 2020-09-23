import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  form:FormGroup
  passwordIncorrecta:boolean

  constructor(private usuarioService:UsuarioService, private router:Router, private builder:FormBuilder) { 
    this.iniciarFormulario()
    this.passwordIncorrecta = false
  }

  iniciarFormulario(){
    this.form = this.builder.group({
      usuario:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }

  login(){
    
  }

}
