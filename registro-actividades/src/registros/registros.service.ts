///importacion de librerias, metodos e interfaces
import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Registros} from './interfaces/registros.interfaces';//contiene los atributos modelos a usar
import {CreateRegistroDTO} from './dto/registros.dto';

//clase que sera usada dentro de controlador de persona, para el uso de las peticiones.
@Injectable()
export class RegistrosService {
    constructor(@InjectModel('Registros')private readonly registrosModel: Model<Registros> ){}
    //metodo get para obtener los registros del array.
    async getRegistros():Promise<Registros[]>{
        const Registros = await this.registrosModel.find()
        return Registros;
    }
    //metodo get para otener un registro mediante un parametro
    async getRegistro(id_registro: Number):Promise<Registros>{
        const registro = await this.registrosModel.findById(id_registro)
        return registro;

    }
    //metodo para crear un nuevo registro 
    async createRegistro(createRegistroDTO: CreateRegistroDTO): Promise<Registros>{
        const Registro = new this.registrosModel(createRegistroDTO);
        await Registro.save();//guarda el registro
        return Registro;
    }
    //metodo para eliminar un registro mediante un parametro
    async deleteRegistro(id_registro: Number):Promise<Registros>{
        const deleteRegistro = await  this.registrosModel.findByIdAndDelete(id_registro);
        return deleteRegistro;
    }
    //metodo para modificar un registro mediante un parametro.
    async updateRegistro(id_registro: Number, createRegistroDTO: CreateRegistroDTO): Promise<Registros>{
        const updateRegistro = await this.registrosModel.findByIdAndUpdate(id_registro,createRegistroDTO,{new: true}); 
        return updateRegistro;
    }
}
