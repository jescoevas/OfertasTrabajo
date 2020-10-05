import { Demandante } from './demandante.model';

export interface Curriculum{
    _id:string,
    demandante:Demandante,
    descripcion:string,
    formacionAcademica:string[],
    formacionComplementaria:string[],
    experiencia:string[],
    competencias:string[],
}