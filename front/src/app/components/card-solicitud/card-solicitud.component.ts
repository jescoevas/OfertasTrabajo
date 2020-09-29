import { Component, Input, OnInit } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';

@Component({
  selector: 'app-card-solicitud',
  templateUrl: './card-solicitud.component.html',
  styleUrls: ['./card-solicitud.component.css']
})
export class CardSolicitudComponent implements OnInit {

@Input() solicitud:Solicitud

  constructor() { }

  ngOnInit() {
  }

}
