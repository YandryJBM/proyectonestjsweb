//importacion de librerias, metodos, clases
import { Module } from '@nestjs/common';
import { RegistrosController } from './registros.controller';
import { RegistrosService } from './registros.service';
import {MongooseModule} from '@nestjs/mongoose';
import {RegistrosSchema } from './schemas/registros.schemas';

@Module({
  //creacion de la entidad Registro en la base de datos mongodb
  imports: [
    MongooseModule.forFeature([
      {name:'Registros',schema: RegistrosSchema}
    ])
  ],
  controllers: [RegistrosController],
  providers: [RegistrosService]
})
export class RegistrosModule {}
