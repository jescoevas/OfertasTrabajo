import { Oferta } from './oferta.model';
import { Demandante } from './demandante.model';


export interface Solicitud{
    _id:string,
    oferta:Oferta
    demandante:Demandante,
    fecha:Date,
    estado:string
}