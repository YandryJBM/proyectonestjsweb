import {Document} from 'mongoose';
//interface con los atributos para usar mediante esta interface.

 export interface Personas extends Document{
      //atributos de la entidad personas
      nombre:String;
      identificacion: String;
      edad: Number;
      estatura: Number;
}
