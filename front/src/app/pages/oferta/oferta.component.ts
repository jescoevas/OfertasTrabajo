import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../../models/oferta.model';
import { OfertaService } from '../../services/oferta.service';
import { Empresa } from '../../models/empresa.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  oferta:Oferta
  empresa:Empresa
  constructor(private activatedRoute:ActivatedRoute, private ofertaService:OfertaService) {
    this.activatedRoute.params.subscribe(params => {
      this.ofertaService.getOfertaById(params['id']).subscribe(data => {
        this.oferta = data['oferta']
        this.empresa = data['empresa']
      })
    })
   }

  ngOnInit() {
  }

  atras(){
    window.history.back()
  }

}
