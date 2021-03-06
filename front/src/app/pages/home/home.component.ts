import { Component, OnInit } from '@angular/core';
import { Oferta } from '../../models/oferta.model';
import { OfertaService } from '../../services/oferta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ofertas:Oferta[] = []
  primeraOferta:Oferta

  constructor(private ofertaService:OfertaService) { 
    this.ofertaService.getOfertas().subscribe(data => {
      this.ofertas = data['ofertas'] as Oferta[]
      this.primeraOferta = this.ofertas[0]
      this.ofertas.shift()
    })
  }

  ngOnInit() {
  }

}
