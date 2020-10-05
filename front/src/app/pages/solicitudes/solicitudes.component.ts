import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { SolicitudService } from '../../services/solicitud.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  solicitudes:Solicitud[] = []

  constructor(private solicitudService:SolicitudService, private activadedRoute:ActivatedRoute, private usuarioService:UsuarioService) {
    this.activadedRoute.params.subscribe(params => {
      if(params['demandanteId']){
        this.solicitudService.getSolicitudesByDemandanteId(params['demandanteId']).subscribe(data => {
          this.solicitudes = data['solicitudes'] as Solicitud[]
        })
      }
      if(params['empresaId']){
        this.solicitudService.getSolicitudesByEmpresaId(params['empresaId']).subscribe(data => {
          this.solicitudes = data['solicitudes'] as Solicitud[]
        })
      }
    })
   }

  ngOnInit() {
  }

}
