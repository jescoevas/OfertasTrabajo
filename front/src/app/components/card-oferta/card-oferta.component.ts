import { Component, Input, OnInit } from '@angular/core';
import { Oferta } from '../../models/oferta.model';

@Component({
  selector: 'app-card-oferta',
  templateUrl: './card-oferta.component.html',
  styleUrls: ['./card-oferta.component.css']
})
export class CardOfertaComponent implements OnInit {

  @Input() oferta:Oferta

  constructor() { }

  ngOnInit() {
  }

}
