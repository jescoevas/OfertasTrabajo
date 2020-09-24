import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  back_url = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  registro(usuario){
    return this.http.post(`${this.back_url}/registro`, usuario)
  }

  checkUsuario(usuario:string, tipo:string){
    return this.http.get(`${this.back_url}/registro/checkUsuario/${usuario}/${tipo}`)
  }

  checkEmail(email:string, tipo:string){
    return this.http.get(`${this.back_url}/registro/checkEmail/${email}/${tipo}`)
  }

  checkWeb(web:string){
    return this.http.get(`${this.back_url}/registro/checkWeb/${web}`).pipe(map(data => data['num']))
  }

  login(data){
    return this.http.post(`${this.back_url}/login`,data)
  }

  sesionIniciada(){
    if(localStorage.getItem('_id')){
      return true
    }else{
      return false
    }
  }
}
