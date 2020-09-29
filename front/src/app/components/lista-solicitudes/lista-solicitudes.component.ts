import { Component, Input, OnInit } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent implements OnInit {

  @Input() solicitudes:Solicitud[]

  constructor() { }

  ngOnInit() {
  }

}
