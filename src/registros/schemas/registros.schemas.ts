//importacion de libreria para ser usada en la conexion de mongodb
import{ Schema } from 'mongoose';
//clase que contendra array de la entidad registro la cual se almacenaran en la base de datos de mongodb

export const RegistrosSchema = new Schema({
    //aplicando relacion, uso de ref dentro de la entidad personas
    id_persona:[{
        type: Schema.Types.ObjectId,
        ref: "Personas"
    }],

    //aplicando relacion, uso de ref dentro de la entidad lugares
    id_lugares:[{

        type: Schema.Types.ObjectId,
        ref:"Lugares"
    }],
    
    fecha:String,
    nombre_de_la_montana:String,
    altura:String,
    tiempo:String
    
    

});