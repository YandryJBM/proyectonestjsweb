//importacion de libreria para mongodb
import{ Schema } from 'mongoose';

//definiendo el modelo de los datos para mongodb, para que puedan ser almacenado en la base de datos.

export const PersonaSchema = new Schema({
  //atributos de la entidad paciente.
  nombre:String,
  identificacion: String,  
  edad: Number,
  estatura: Number,
  
    //haciendo ref al atributo transaccional que tendra su id_, en este caso id_paciente a la entidad registro
  registros:{
    type: Schema.Types.ObjectId,
    ref:"Registros"
  }
});