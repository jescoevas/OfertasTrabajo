import { Component } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { SolicitudService } from '../../services/solicitud.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent{

  solicitudes:Solicitud[] = []

  constructor(private solicitudService:SolicitudService, private activadedRoute:ActivatedRoute, private usuarioService:UsuarioService) {
    this.cargarSolicitudes()
   }

  cargarSolicitudes(){
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

  coloresEstado(solicitud:Solicitud){
    return {
      'text-primary': solicitud.estado === 'PENDIENTE',
      'text-success': solicitud.estado === 'ACEPTADA',
      'text-danger': solicitud.estado === 'RECHAZADA',
    }
  }

  aceptar(solicitud:Solicitud){
    Swal.fire({
      icon:'question',
      title:'¿Seguro que quieres aceptar esta solicitud?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.solicitudService.aceptarSolicitud(solicitud._id).subscribe(data => {
          this.cargarSolicitudes()
          Swal.fire({
            icon:'success',
            title:'Solicitud aceptada'
          })
        })
      }
    })
  }

  rechazar(solicitud:Solicitud){
    Swal.fire({
      icon:'question',
      title:'¿Seguro que quieres aceptar esta solicitud?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.solicitudService.rechazarSolicitud(solicitud._id).subscribe(data => {
          this.cargarSolicitudes()
          Swal.fire({
            icon:'error',
            title:'Solicitud rechazada'
          })
        })
      }
    })
  }

}
