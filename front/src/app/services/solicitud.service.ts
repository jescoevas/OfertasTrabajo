import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  back_url = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  getSolicitudesByDemandanteId(demandanteId){
    return this.http.get(`${this.back_url}/demandante/${demandanteId}/solicitudes`);
  }

  getSolicitudesByEmpresaId(empresaId){
    return this.http.get(`${this.back_url}/empresa/${empresaId}/solicitudes`);
  }

  newSolicitud(data){
    return this.http.post(`${this.back_url}/solicitud/new`, data)
  }

}
