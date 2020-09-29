import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { SolicitudService } from '../../services/solicitud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  solicitudes:Solicitud[] = []

  constructor(private solicitudService:SolicitudService, private activadedRoute:ActivatedRoute) {
    this.activadedRoute.params.subscribe(params => {
      this.solicitudService.getSolicitudesByDemandanteId(params['id']).subscribe(data => {
        this.solicitudes = data['solicitudes'] as Solicitud[]
      })
    })
   }

  ngOnInit() {
  }

}
