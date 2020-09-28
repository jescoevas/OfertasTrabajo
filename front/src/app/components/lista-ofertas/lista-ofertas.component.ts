import { Component, Input, OnInit } from '@angular/core';
import { Oferta } from '../../models/oferta.model';

@Component({
  selector: 'app-lista-ofertas',
  templateUrl: './lista-ofertas.component.html',
  styleUrls: ['./lista-ofertas.component.css']
})
export class ListaOfertasComponent implements OnInit {

  @Input() ofertas:Oferta[]

  constructor() { }

  ngOnInit() {
  }

}
