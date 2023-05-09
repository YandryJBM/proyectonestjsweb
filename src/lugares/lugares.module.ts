//importacion de librerias clases y metodos.
import { Module } from '@nestjs/common';
import { LugaresController } from './lugares.controller';
import { LugaresService } from './lugares.service';
import {MongooseModule} from '@nestjs/mongoose';
import {LugaresSchema} from './schemas/lugares.schemas';

@Module({
  //creacion de la entidad lugares dentro de mongodb.
  imports: [
    MongooseModule.forFeature([
      {name:'Lugares',schema: LugaresSchema}
    ])
  ],
  controllers: [LugaresController],
  providers: [LugaresService]
})
export class LugaresModule {}
