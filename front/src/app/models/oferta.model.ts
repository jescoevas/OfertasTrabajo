import { Empresa } from './empresa.model';

export interface Oferta{
    _id:string,
    titulo:string,
    fechaLimite:Date,
    descripcion:string,
    requisitos:string,
    sueldo:number,
    empresa:Empresa
}