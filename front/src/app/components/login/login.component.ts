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
  tipos:string[] = ['Empresa','Demandante']
  usuarioNoExiste:boolean
  passwordIncorrecta:boolean

  constructor(private usuarioService:UsuarioService, private router:Router, private builder:FormBuilder) { 
    this.iniciarFormulario()
    this.usuarioNoExiste = false
    this.passwordIncorrecta = false
    }

  iniciarFormulario(){
    this.form = this.builder.group({
      usuario:['', [Validators.required]],
      password:['', [Validators.required]],
      tipo:['', [Validators.required]]
    })
  }

  //Validaciones síncronas
  get tipoRequerido(){
    return this.form.get('tipo').invalid && this.form.get('tipo').touched
}
  get usuarioNoValido(){
    return this.usuarioRequerido || this.usuarioNoExiste
  }
  get usuarioRequerido(){
      return this.form.get('usuario').invalid && this.form.get('usuario').touched
  }
  get passwordNoValido(){
    return this.passwordRequerido || this.passwordIncorrecta
  }
  get passwordRequerido(){
    return this.form.get('password').invalid && this.form.get('password').touched
  }

  login(){
    if(this.form.invalid){
      this.form.markAllAsTouched()
    }else{
      this.usuarioService.login(this.form.value).subscribe(data => {
        if(data['message'] === 'Incorrect user'){
          this.usuarioNoExiste = true
          return ;
        }else if(data['message'] === 'Incorrect password'){
          this.passwordIncorrecta = true
          return ;
        }else{
          const usuario = data['usuario']
          localStorage.setItem('_id', usuario._id)
          this.router.navigateByUrl('/')
        }
      })
    }
    return;
  }

}
