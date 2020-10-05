import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurriculumService } from '../../services/curriculum.service';
import { Curriculum } from '../../models/curriculum.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {

  curriculum:Curriculum

  constructor(private activatedRoute:ActivatedRoute, private curriculumService:CurriculumService, private usuarioService:UsuarioService) {
    this.activatedRoute.params.subscribe(params => {
      this.curriculumService.getCurriculumByDemandanteId(params['id']).subscribe(data => {
        this.curriculum = data['curriculum']
      })
    })
   }

   atras(){
     window.history.back()
   }

}
