//importacion de libreria y de clases y servicios que seran usados dentro del controlador
import { Controller, Get, Post, Put, Delete, Res,HttpStatus,Body, Param,NotFoundException} from '@nestjs/common';
import {CreatePersonaDTO } from './dto/personas.dto'//contiene los atributos cliente/servidor 
import { PersonasService } from './personas.service';//contiene metodos"peticiones".

@Controller('personas')
//controlador que manejara las respectivas peticiones servidor-cliente

export class PersonasController {
    //cada una de estas peticiones usa el servicio ya que contiene los respectivos metodos para las peticiones 
    constructor(private personasService:PersonasService ){}
    
    //peticion post, para crear un persona con el uso de body apartir de postman.
    @Post('/crear')
    async createPost(@Res() res,@Body() createPersonaDTO:CreatePersonaDTO){
        const persona = await this.personasService.createPersona(createPersonaDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Persona ingresado Correctamente..',
             persona

        });
    }

    //peticion get, mostrara todo los datos que contendra el array de persona, almacenados en el mongodb.
    @Get('/')
    async VerPersonas(@Res()res){
        const personas = await this.personasService.getPersonas();
        return res.status(HttpStatus.OK).json({
            
            personas
        });
    }

    //peticion get, mostrara un dato apartir de su respectiva id. 
    @Get('/:id_p')
    async VerPersona(@Res()res , @Param('id_p')id_persona) {
        const persona = await this.personasService.getPersona(id_persona)
        //VALIDACION , si no se encuentra el persona lanza el error.
        if(!persona)throw new NotFoundException('Persona no encontrado');
        return res.status(HttpStatus.OK).json(persona);
   }

   //peticion delete, eliminar un dato apartir del envio de una id.
   @Delete('/eliminar/:id_p')
   async EliminarPersona(@Res()res, @Param('id_p')id_persona){
        const personaDelet = await this.personasService.deletePersona(id_persona)
        //validacion si el persona a eliminar no existe enviara un error.
        if(!personaDelet)throw new NotFoundException('Persona no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Persona eliminado..',
            personaDelet
        });
   }
   //peticion put, modificara un dato apartir de el envio de un id, y el uso de body de postman
   @Put('/modificar/:id_p')
   async modificarPersona(@Res()res,@Body()createPersonaDTO:CreatePersonaDTO,@Param('id_p')id_persona){
        const updatePersona = await this.personasService.updatePersona(id_persona,createPersonaDTO);
        //validacion si el persona modificado no existe enviara el error.
        if(!updatePersona)throw new NotFoundException('Persona no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Persona modificado',
             updatePersona 
        });
   }
}
