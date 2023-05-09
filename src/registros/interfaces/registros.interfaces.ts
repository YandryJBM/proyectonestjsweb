//importacion de libreria
import {Document} from 'mongoose';
//interfaces que se usara como modelo de los datos 
export interface Registros extends Document{
     //atributos de la entidad registro asignados por el docente.
     readonly id_personas:String;
     readonly id_lugares:String;
     readonly fecha:String;
     readonly nombre_de_la_montana: string;
     readonly altura:string;
     readonly tiempo:string;
    


}