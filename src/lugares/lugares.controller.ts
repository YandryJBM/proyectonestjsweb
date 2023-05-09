//importacion de libreria y de clases y servicios que seran usados dentro del controlador
import { Controller, Get, Post, Put, Delete, Res,HttpStatus,Body, Param, Query, NotFoundException} from '@nestjs/common';
import {CreateLugarDTO } from './dto/lugares.dto';//contiene los atributos cliente/servidor 
import { LugaresService } from './lugares.service';//contiene metodos"peticiones".

//controlador que manejara las respectivas peticiones servidor-cliente
@Controller('lugares')
export class LugaresController {  
    //cada una de estas peticiones usa el metodo service ya que contiene los respectivos metodos para las peticiones 
    constructor(private lugaresService:LugaresService ){}
    
    //peticion post para crear lugares, apartir del body de postman 
    @Post('/crear')
    async createPost(@Res() res,@Body() createLugarDTO:CreateLugarDTO){
        const lugar = await this.lugaresService.createLugar(createLugarDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Lugar ingresado Correctamente..',
            lugar: lugar

        });
    }

    //peticion get, para obtener todo los lugares dentro del array de este.
    @Get('/')
    async VerLugares(@Res() res){
        const lugares = await this.lugaresService.getLugares();
        return res.status(HttpStatus.OK).json({
            
             lugares
        });
    }
    //peticion get, para obtener un solo plato dentro del array de lugares.
    @Get('/:id_l')
    async VerLugar(@Res()res , @Param('id_l') id_lugar) {
        const lugar = await this.lugaresService.getLugar(id_lugar)
        //validacion, si el plato no existe manda error.
        if(!lugar)throw new NotFoundException('Lugar no encontrado');
        return res.status(HttpStatus.OK).json(lugar);
   }

   //peticion delete, para eliminar un dato apartir de un id que sera enviado como parametro.
   @Delete('/eliminar/:id_l')
   async EliminarLugar(@Res()res, @Query('id_l') id_lugar){
        const lugarDelet = await this.lugaresService.deleteLugar(id_lugar)
        //validacion si el plato no existe arroja error.
        if(!lugarDelet)throw new NotFoundException('Lugar no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Lugar eliminado..',
             lugarDelet
        });
   }
   //peticion put, para modificar un dato aparitr de la id_ es decir un parametro de envio
   @Put('/modificar/:id_l')
   async modificarLugar(@Res()res,@Body()createLugarDTO:CreateLugarDTO,@Param('id_l') id_lugar){
        const updateLugar = await this.lugaresService.updateLugar(id_lugar,createLugarDTO);
        //validacion, si el id, del plato no existe arroja un error.
        if(!updateLugar)throw new NotFoundException('Plato no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Lugar modificado',
            //atra vez de la propiedad lugares que envie lugares
            updateLugar
        });
   }
}
