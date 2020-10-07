import { Component } from '@angular/core';
import { Oferta } from '../../models/oferta.model';
import { OfertaService } from '../../services/oferta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent{

  ofertas:Oferta[] = []
  titulo:string

  constructor(private ofertaService:OfertaService, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      this.titulo = params['titulo']
      this.ofertaService.getOfertasByTitulo(this.titulo).subscribe(data => {
        this.ofertas = data['ofertas'] as Oferta[]
      })
    })
  }

}
