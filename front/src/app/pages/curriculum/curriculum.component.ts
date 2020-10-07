import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurriculumService } from '../../services/curriculum.service';
import { Curriculum } from '../../models/curriculum.model';
import { UsuarioService } from '../../services/usuario.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {

  curriculum:Curriculum
  formActivo:boolean
  form:FormGroup

  constructor(private activatedRoute:ActivatedRoute, private curriculumService:CurriculumService, private usuarioService:UsuarioService, private builder:FormBuilder) {
    this.cargarCurriculum()
    this.formActivo = false
   }

  cargarCurriculum(){
    this.activatedRoute.params.subscribe(params => {
      this.curriculumService.getCurriculumByDemandanteId(params['id']).subscribe(data => {
        this.curriculum = data['curriculum']
      })
    })
  }

  atras(){
    window.history.back()
  }

  //Formulario
  editar(){
    this.formActivo = !this.formActivo
    if(this.formActivo){
      this.form = this.builder.group({
        formacionAcademica: this.builder.array(this.curriculum.formacionAcademica),
        formacionComplementaria: this.builder.array(this.curriculum.formacionComplementaria),
        experiencia: this.builder.array(this.curriculum.experiencia),
        competencias: this.builder.array(this.curriculum.competencias)
      })
    }
  }

  get formacionAcademica() {
    return this.form.get('formacionAcademica') as FormArray;
  }
  get formacionComplementaria() {
    return this.form.get('formacionComplementaria') as FormArray;
  }
  get experiencia() {
    return this.form.get('experiencia') as FormArray;
  }
  get competencias() {
    return this.form.get('competencias') as FormArray;
  }

  agregarFormacionAcademica() {
    this.formacionAcademica.push(this.builder.control(''));
  }
  borrarFormacionAcademica(i: number) {
    this.formacionAcademica.removeAt(i);
  }

  agregarFormacionComplementaria() {
    this.formacionComplementaria.push(this.builder.control(''));
  }
  borrarFormacionComplementaria(i: number) {
    this.formacionComplementaria.removeAt(i);
  }

  agregarExperiencia() {
    this.experiencia.push(this.builder.control(''));
  }
  borrarExperiencia(i: number) {
    this.experiencia.removeAt(i);
  }

  agregarCompetencias() {
    this.competencias.push(this.builder.control(''));
  }
  borrarCompetencias(i: number) {
    this.competencias.removeAt(i);
  }

  submit(){
    Swal.showLoading()
    let data = this.form.value
    data.id = this.curriculum._id
    this.curriculumService.editarCurriculum(data).subscribe(res => {
      this.cargarCurriculum()
      this.formActivo = false
      Swal.fire({
        icon:'success',
        title:'Curriculum actualizado'
      })
    })
  }

}
