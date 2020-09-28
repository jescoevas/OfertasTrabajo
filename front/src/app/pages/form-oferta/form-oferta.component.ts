import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OfertaService } from '../../services/oferta.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-form-oferta',
  templateUrl: './form-oferta.component.html',
  styleUrls: ['./form-oferta.component.css']
})
export class FormOfertaComponent {

  form:FormGroup

  constructor(private builder:FormBuilder, private ofertaService:OfertaService, private router:Router, private usuarioService:UsuarioService) {
    this.iniciarForm()
   }

  iniciarForm(){
    this.form = this.builder.group({
    titulo:['', [Validators.required]],
    fechaLimite:[null, [Validators.required, this.fechaPosteriorAHoy]],
    descripcion:['', [Validators.required]],
    requisitos:['', [Validators.required]],
    sueldo:['', [Validators.required]]
    })
  }

  //Validaciones síncronas
  get tituloNoValido(){
    return this.tituloCampoRequerido
  }
  get tituloCampoRequerido(){
    return this.form.get('titulo').errors ? this.form.get('titulo').errors.required && this.form.get('titulo').touched : null
  }

  get fechaLimiteNoValido(){
    return this.fechaLimiteCampoRequerido || this.fechaLimiteFechaPosteriorAHoy
  }
  get fechaLimiteCampoRequerido(){
    return this.form.get('fechaLimite').errors ? this.form.get('fechaLimite').errors.required && this.form.get('fechaLimite').touched : null
  }
  get fechaLimiteFechaPosteriorAHoy(){
    return this.form.get('fechaLimite').errors ? this.form.get('fechaLimite').errors.fechaPosteriorAHoy && this.form.get('fechaLimite').touched : null
  }

  get descripcionNoValido(){
    return this.descripcionCampoRequerido
  }
  get descripcionCampoRequerido(){
    return this.form.get('descripcion').errors ? this.form.get('descripcion').errors.required && this.form.get('descripcion').touched : null
  }

  get requisitosNoValido(){
    return this.requisitosCampoRequerido
  }
  get requisitosCampoRequerido(){
    return this.form.get('requisitos').errors ? this.form.get('requisitos').errors.required && this.form.get('requisitos').touched : null
  }

  get sueldoNoValido(){
    return this.sueldoCampoRequerido
  }
  get sueldoCampoRequerido(){
    return this.form.get('sueldo').errors ? this.form.get('sueldo').errors.required && this.form.get('sueldo').touched : null
  }

  //Validaciones personalizadas
  private fechaPosteriorAHoy(control:FormControl):{[s:string]:boolean}{
    let fecha = Date.parse(control.value)
    let hoy = new Date().getTime()
    if(fecha < hoy){
      return {
        fechaPosteriorAHoy:true
      }
    }
    return null
  }

  submit(){
    if(this.form.invalid){
      this.form.markAllAsTouched()
      return;
    }else{
      this.ofertaService.newOferta(this.form.value).subscribe(data => {
        this.router.navigateByUrl(`/ofertas/${this.usuarioService.getId()}`)
      })
    }
  }

}
