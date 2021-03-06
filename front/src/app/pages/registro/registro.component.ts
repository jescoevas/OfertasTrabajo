import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{

  form:FormGroup
  datos:string

  defaultForm:any = {
    tipo:['', [Validators.required]],
  }

  constructor(private usuarioService:UsuarioService, private router:Router, private builder:FormBuilder) { 
    this.form = this.builder.group(this.defaultForm),
    this.datos = 'default'
  }

  //Validaciones síncronas
  get usuarioNoValido(){
    return this.usuarioRequerido || this.usuarioMinLength || this.usuarioUsuarioEnUso
  }
  get usuarioRequerido(){
    return this.form.get('usuario').errors ? this.form.get('usuario').errors.required && this.form.get('usuario').touched : null
  }
  get usuarioMinLength(){
    return this.form.get('usuario').errors ? this.form.get('usuario').errors.minlength && this.form.get('usuario').touched : null
  }
  get usuarioUsuarioEnUso(){
    return this.form.get('usuario').errors ? this.form.get('usuario').errors.usuarioEnUso && this.form.get('usuario').touched : null
  }

  get passwordNoValido(){
    return this.passwordRequerido || this.passwordMinLength
  }
  get passwordRequerido(){
    return this.form.get('password').errors ? this.form.get('password').errors.required && this.form.get('password').touched : null
  }
  get passwordMinLength(){
    return this.form.get('password').errors ? this.form.get('password').errors.minlength && this.form.get('password').touched : null
  }

  get nombreNoValido(){
    return this.nombreRequerido
  }
  get nombreRequerido(){
    return this.form.get('nombre').errors ? this.form.get('nombre').errors.required && this.form.get('nombre').touched : null
  }

  get apellidosNoValido(){
    return this.apellidosRequerido
  }
  get apellidosRequerido(){
    return this.form.get('apellidos').errors ? this.form.get('apellidos').errors.required && this.form.get('apellidos').touched : null
  }

  get fechaNacimientoNoValido(){
    return this.fechaNacimientoRequerido || this.fechaNacimientoFechaAnteriorAHoy
  }
  get fechaNacimientoRequerido(){
    return this.form.get('fechaNacimiento').errors ? this.form.get('fechaNacimiento').errors.required && this.form.get('fechaNacimiento').touched : null
  }
  get fechaNacimientoFechaAnteriorAHoy(){
    return this.form.get('fechaNacimiento').errors ? this.form.get('fechaNacimiento').errors.fechaAnteriorAHoy && this.form.get('fechaNacimiento').touched : null
  }

  get direccionNoValido(){
    return this.direccionRequerido
  }
  get direccionRequerido(){
    return this.form.get('direccion').errors ? this.form.get('direccion').errors.required && this.form.get('direccion').touched : null
  }

  get descripcionNoValido(){
    return this.descripcionRequerido
  }
  get descripcionRequerido(){
    return this.form.get('descripcion').errors ? this.form.get('descripcion').errors.required && this.form.get('descripcion').touched : null
  }

  get webNoValido(){
    return this.webRequerido || this.webWebEnUso
  }
  get webRequerido(){
    return this.form.get('web').errors ? this.form.get('web').errors.pattern && this.form.get('web').touched : null
  }
  get webWebEnUso(){
    return this.form.get('web').errors ? this.form.get('web').errors.webEnUso && this.form.get('web').touched : null
  }

  get telefonoNoValido(){
    return this.telefonoRequerido || this.telefonoNoNumerico
  }
  get telefonoRequerido(){
    return this.form.get('telefono').errors ? this.form.get('telefono').errors.required && this.form.get('telefono').touched : null
  }
  get telefonoNoNumerico(){
    return this.form.get('telefono').errors ? this.form.get('telefono').errors.debeSerNumerico && this.form.get('telefono').touched : null
  }

  get emailNoValido(){
    return this.emailRequerido || this.emailEmail || this.emailEmailEnUso
  }
  get emailRequerido(){
    return this.form.get('email').errors ? this.form.get('email').errors.required && this.form.get('email').touched : null
  }
  get emailEmail(){
    return this.form.get('email').errors ? this.form.get('email').errors.email && this.form.get('email').touched : null
  }
  get emailEmailEnUso(){
    return this.form.get('email').errors ? this.form.get('email').errors.emailEnUso && this.form.get('email').touched : null
  }

  //Validaciones asíncronas
  usuarioEnUsoEmpresa = (control:FormControl):Promise<any> | Observable<any> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.usuarioService.checkUsuario(control.value, this.form.value.tipo).subscribe(data => {
          if(data['tipo'] === 'Empresa'){
            if(data['num'] > 0){
              resolve({usuarioEnUso:true})
            }else{
              resolve(null)
            }
          }else{
            return(null)
          }
        })
      }, 1500);
    })
  }

  emailEnUsoEmpresa = (control:FormControl):Promise<any> | Observable<any> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.usuarioService.checkEmail(control.value, this.form.value.tipo).subscribe(data => {
          if(data['tipo'] === 'Empresa'){
            if(data['num'] > 0){
              resolve({emailEnUso:true})
            }else{
              resolve(null)
            }
          }else{
            return(null)
          }
        })
      }, 1500);
    })
  }

  webEnUso = (control:FormControl):Promise<any> | Observable<any> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.usuarioService.checkWeb(control.value).subscribe(num => {
            if(num > 0){
              resolve({webEnUso:true})
            }else{
              resolve(null)
            }
        })
      }, 1500);
    })
  }

  usuarioEnUsoDemandante = (control:FormControl):Promise<any> | Observable<any> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.usuarioService.checkUsuario(control.value, this.form.value.tipo).subscribe(data => {
          if(data['tipo'] === 'Demandante'){
            if(data['num'] > 0){
              resolve({usuarioEnUso:true})
            }else{
              resolve(null)
            }
          }else{
            return(null)
          }
        })
      }, 1500);
    })
  }

  emailEnUsoDemandante = (control:FormControl):Promise<any> | Observable<any> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.usuarioService.checkEmail(control.value, this.form.value.tipo).subscribe(data => {
          if(data['tipo'] === 'Demandante'){
            if(data['num'] > 0){
              resolve({emailEnUso:true})
            }else{
              resolve(null)
            }
          }else{
            return(null)
          }
        })
      }, 1500);
    })
  }

  //Validaciones personalizadas
  private debeSerNumerico(control:FormControl):{[s:string]:boolean}{
    if(isNaN(control.value) || control.value.toString().length !== 9){
      return {
        debeSerNumerico:true
      }
    }
    return null
  }


  private fechaAnteriorAHoy(control:FormControl):{[s:string]:boolean}{
    let fecha = Date.parse(control.value)
    let hoy = new Date().getTime()
    if(fecha > hoy){
      return {
        fechaAnteriorAHoy:true
      }
    }
    return null
  }

  //Métodos auxiliares
  change(){
    const {tipo} = this.form.value
    if(tipo === 'Empresa'){
      this.form = this.builder.group({
        usuario:['', [Validators.required, Validators.minLength(6)], [this.usuarioEnUsoEmpresa]],
        password:['', [Validators.required, Validators.minLength(6)]],
        tipo:['Empresa', [Validators.required]],
        nombre:['', [Validators.required]],
        direccion:['', [Validators.required]],
        descripcion:['', [Validators.required]],
        telefono:['', [Validators.required, this.debeSerNumerico]],
        email:['', [Validators.required, Validators.email], [this.emailEnUsoEmpresa]],
        web:['', [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')], [this.webEnUso]]
      })
      this.datos = 'Empresa'
    }else if(tipo === 'Demandante'){
      this.form = this.builder.group({
        usuario:['', [Validators.required, Validators.minLength(6)], [this.usuarioEnUsoDemandante, this.emailEnUsoDemandante]],
        password:['', [Validators.required, Validators.minLength(6)]],
        tipo:['Demandante', [Validators.required]],
        nombre:['', [Validators.required]],
        apellidos:['', [Validators.required]],
        fechaNacimiento:['', [Validators.required, this.fechaAnteriorAHoy]],
        telefono:['', [Validators.required, this.debeSerNumerico]],
        email:['', [Validators.required, Validators.email], [this.emailEnUsoDemandante]],
        direccion:['', [Validators.required]],
        foto:[''],
      })
      this.datos = 'Demandante'
    }else{
      this.form = this.builder.group(this.defaultForm)
      this.datos = 'default'
    }
  }


  registro(){
    if(this.form.invalid){
      this.form.markAllAsTouched()
    }else{
      Swal.showLoading()
      this.usuarioService.registro(this.form.value).subscribe(data => {
        Swal.fire({
          icon:'success',
          title:'Registro exitoso'
        })
        this.router.navigateByUrl('')
      })
    }
    return;
  }

}
