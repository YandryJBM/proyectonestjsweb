//importacion de librerias, metodos, y clases.
import { Controller ,Get, Post, Put, Delete, Res,HttpStatus,Body, Param,NotFoundException} from '@nestjs/common';
import { CreateRegistroDTO } from './dto/registros.dto'//contiene los atributos cliente/servidor
import { RegistrosService } from './registros.service';//contiene metodos"peticiones".

//controlador que manejara las respectivas peticiones servidor-cliente
@Controller('registros')
export class RegistrosController {
    //cada una de estas peticiones usa el metodo service ya que contiene los respectivos metodos para las peticiones 
    constructor(private registrosService:RegistrosService ){}

    //peticion post para crear registros, apartir del body de postman 
    @Post('/crear')
    async createPost(@Res() res,@Body() createRegistroDTO:CreateRegistroDTO){
        //console.log(createPlatoDTO);
        const registro = await this.registrosService.createRegistro(createRegistroDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Registro ingresado Correctamente..',
            registro

        });
    }
    //peticion get para obtener los registros almacenados dentro de la mongodb
    @Get('/')
    async getRegistros(@Res()res){
        const registros = await this.registrosService.getRegistros();
        return res.status(HttpStatus.OK).json({
            
            //atra vez de la propiedad lugares que envie lugares
            registros
        });
    }
    //peticion get para obtener un registro apartir del envio de un parametro 
    @Get('/:id_R')
    async getRegistro(@Res()res , @Param('id_R')id_registro) {
        const registro = await this.registrosService.getRegistro(id_registro)
        //validacion  si no existe el registro lanza un error
        if(!registro)throw new NotFoundException('Registro no encontrado');
        return res.status(HttpStatus.OK).json(registro);
   }

   //peticion delete, para eliminar un dato apartir del envio de un parametro id_
   @Delete('/eliminar/:id_R')
    async deletRegistro(@Res()res, @Param('id_R')id_registro){
        const RegistroDelet = await this.registrosService.deleteRegistro(id_registro)
        //validacion si no existe el registro lanza un error
        if(!RegistroDelet)throw new NotFoundException('Registro no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Registro eliminado..',
             RegistroDelet
        });
    } 
      
    //peticion put, modificara un registro apartir del envio de un parametro y el uso del body.
    @Put('/modificar/:id_R')
    async updateRegistro(@Res()res,@Body()createRegistroDTO:CreateRegistroDTO,@Param('id_R')id_registro){
        const updateRegistro = await this.registrosService.updateRegistro(id_registro,createRegistroDTO);
        //validacion si no se encuentra el registro lanzara un error.
        if(!updateRegistro)throw new NotFoundException('Registro no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Registro modificado',
             updateRegistro
        });
    }
}
