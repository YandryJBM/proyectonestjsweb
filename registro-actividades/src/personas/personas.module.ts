//importacion de librerias
import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';
import {MongooseModule} from '@nestjs/mongoose';
import { PersonaSchema } from './schemas/personas.schemas';

@Module({
  //creacion del nombre de la entidad en la base de datos.
  imports: [
    MongooseModule.forFeature([
      {name:'Personas',schema: PersonaSchema}
    ])
  ],
  controllers: [PersonasController],
  providers: [PersonasService]
})
export class PersonasModule {}
