import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  back_url = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  getCurriculumByDemandanteId(id:string){
    return this.http.get(`${this.back_url}/demandante/${id}/curriculum`)
  }
  
  editarCurriculum(data){
    return this.http.put(`${this.back_url}/curriculum/editar`,data)
  }

}
