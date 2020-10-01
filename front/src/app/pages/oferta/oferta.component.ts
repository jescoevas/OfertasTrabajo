import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../../models/oferta.model';
import { OfertaService } from '../../services/oferta.service';
import { Empresa } from '../../models/empresa.model';
import { UsuarioService } from '../../services/usuario.service';
import { SolicitudService } from '../../services/solicitud.service';
import { Solicitud } from '../../models/solicitud.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent{

  oferta:Oferta
  empresa:Empresa
  yaSolicitada:boolean
  constructor(private activatedRoute:ActivatedRoute, private ofertaService:OfertaService, private usuarioService:UsuarioService, private solicitudService:SolicitudService) {
    this.activatedRoute.params.subscribe(params => {
      this.ofertaService.getOfertaById(params['id']).subscribe(data => {
        this.oferta = data['oferta']
        this.empresa = data['empresa']
        this.comprobarSolicitud()
      })
    })
   }

  atras(){
    window.history.back()
  }

  comprobarSolicitud(){
    this.solicitudService.getSolicitudesByDemandanteId(this.usuarioService.getId()).subscribe(data => {
      const solicitudes = data['solicitudes'] as Solicitud[]
      this.yaSolicitada = this.ofertaService.yaSolicitada(this.oferta, solicitudes)
    })
  }

  solicitar(){
    if(confirm('¿Seguro que quieres solicitar esta oferta?')){
      const data = {
        ofertaId:this.oferta._id,
        demandanteId:this.usuarioService.getId(),
        fecha:new Date()
      }
      this.solicitudService.newSolicitud(data).subscribe(res => {
        this.comprobarSolicitud()
      })
    }
  }

}
