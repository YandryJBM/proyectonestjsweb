//importaciones de librerias
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//controlador
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
