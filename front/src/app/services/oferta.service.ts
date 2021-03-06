import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { Oferta } from '../models/oferta.model';
import { Solicitud } from '../models/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  back_url = 'http://localhost:3000'

  constructor(private http:HttpClient, private usuarioService:UsuarioService) { }


  getOfertas(){
    return this.http.get(`${this.back_url}/ofertas`);
  }

  getOfertasByTitulo(titulo:string){
    return this.http.post(`${this.back_url}/ofertas`, {titulo});
  }

  getOfertasByEmpresaId(empresaId){
    return this.http.get(`${this.back_url}/empresa/${empresaId}/ofertas`);
  }

  newOferta(data){
    data.id = this.usuarioService.getId()
    return this.http.post(`${this.back_url}/oferta/new`, data)
  }

  getOfertaById(id){
    return this.http.get(`${this.back_url}/oferta/${id}`)
  }

  yaSolicitada(oferta:Oferta, solicitudes:Solicitud[]){
    if(solicitudes.length === 0){
      return false
    }else{
      for (let i = 0; i < solicitudes.length; i++) {
        const solicitud = solicitudes[i];
        if(solicitud.oferta.toString() === oferta._id){
          return true
        }
      }
    }
    return false
  }

}
