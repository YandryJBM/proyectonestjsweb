//importacion librerias a usar, y de interfaces y clases
import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Personas} from './interfaces/personas.interfaces';//contiene los atributos modelos a usar
import {CreatePersonaDTO} from './dto/personas.dto';

//clase que sera usada dentro de controlador de persona, para el uso de las peticiones.
@Injectable()
export class PersonasService {
    constructor(@InjectModel('Personas')private readonly  personaModel: Model<Personas> ){}
    
    //metodo get para obtener todo los personas
    async getPersonas():Promise<Personas[]>{
        const Platos = await this.personaModel.find()
        return Platos;
    }
    //metodo get para obtener una persona
    async getPersona(id_persona: Number):Promise<Personas>{
        const persona = await this.personaModel.findById(id_persona)
        return persona;

    }
   //metodo para crear  una persona
    async createPersona(createPersonaDTO: CreatePersonaDTO): Promise<Personas>{
        const persona = new this.personaModel(createPersonaDTO);
        await persona.save();
        return persona;
    }
    //metodo para eliminar una persona
    async deletePersona(id_persona: Number):Promise<Personas>{
        const deletePersona = await  this.personaModel.findByIdAndDelete(id_persona);
        return deletePersona;
    }
    //metodo para modificar una persona
    async updatePersona(id_persona: Number, createPersonaDTO: CreatePersonaDTO): Promise<Personas>{
        const UpdatePersona = await this.personaModel.findByIdAndUpdate(id_persona,createPersonaDTO,{new: true}); 
        return UpdatePersona;
    }




}
