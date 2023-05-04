//importacion de libreria para mongodb
import{ Schema } from 'mongoose';
//definiendo el modelo de los datos para mongodb, para que puedan ser almacenado en la base de datos.

export const LugaresSchema = new Schema({
    //atributos asignados de la entidad platos
    pais: String,
    ciudad: String,

    //haciendo ref al atributo transaccional que tendra su id_, en este caso id_paciente a la entidad registro
    registro:{
        type: Schema.Types.ObjectId,
        ref:"Registro"
    }
});