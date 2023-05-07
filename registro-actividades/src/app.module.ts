//importacion de las ramas y librerias
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugaresModule } from './lugares/lugares.module';
import {MongooseModule} from '@nestjs/mongoose';
import { RegistrosModule } from './registros/registros.module';
import { PersonasModule } from './personas/personas.module';

//modulo priincipal contiene la URL de la base de datos de mongodb atlas.
@Module({
  //importacion de cada modulo de las entidades creada, lugares, persona,REGISTRO
  //conexion a la base de datos mongodb atlas.
  imports: [LugaresModule,MongooseModule.forRoot('mongodb+srv://enderyancraft:yandry@cluster0.9zsqunt.mongodb.net/test'), RegistrosModule, PersonasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
