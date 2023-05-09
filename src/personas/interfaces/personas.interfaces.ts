import {Document} from 'mongoose';
//interface con los atributos para usar mediante esta interface.

 export interface Personas extends Document{
      //atributos de la entidad personas
      readonly nombre:String;
      readonly identificacion: String;
      readonly edad: Number;
      readonly estatura: Number;
}
