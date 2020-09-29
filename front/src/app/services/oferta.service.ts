import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  back_url = 'http://localhost:3000'

  constructor(private http:HttpClient, private usuarioService:UsuarioService) { }


  getOfertas(){
    return this.http.get(`${this.back_url}/ofertas`);
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

}
