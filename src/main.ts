//importaciones de librerias
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"//importacion de libreia para swagger
//metodo principal
async function bootstrap() {
  //creacion de constante para un nest factory

  const app = await NestFactory.create(AppModule);
 //datos que se obtendran dentro de Swagger
  const options= new DocumentBuilder()
  .setTitle("Registro de Actividades De Montañismo")
  .setDescription("Este es un servicio rest sobre Registro de Actividades De Montañismo - By Grupo Estudiantil")
  .setVersion("1.0")
  .addTag("Montañismo")
  .build();
 
  const document= SwaggerModule.createDocument(app, options)
 //ruta que contendra swagger.
 SwaggerModule.setup("api/docs", app, document)
 //puerto
  await app.listen(process.env.PORT || 3000);
//enlace para el hostGratuito --heroku
//https://registro-actividades.herokuapp.com/api/docs#/

}
bootstrap();
