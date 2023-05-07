//importacion de la libreria 
import {Document} from 'mongoose';
//interface con los atributos para usar mediante esta interface.
 export interface Lugares extends Document{
      pais:String;      
      ciudad:String;
}
