import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../../models/oferta.model';
import { OfertaService } from '../../services/oferta.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {

  ofertas:Oferta[] = []

  constructor(private activatedRoute:ActivatedRoute, private ofertaService:OfertaService) {
    this.activatedRoute.params.subscribe(params => {
      this.ofertaService.getOfertasByEmpresaId(params['id']).subscribe(data => {
        this.ofertas = data['ofertas'] as Oferta[]
      })
    })
  }


}
