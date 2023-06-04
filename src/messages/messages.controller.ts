import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessageService } from './messages.service';

@Controller('/messages')
export class MessagesController {
    messagesService : MessageService;
    constructor()
    {
        // DONT do this
        this.messagesService = new MessageService();
    }
    @Get()

    listMessages()
    {
        return this.messagesService.findAll()
    }

    @Post()
    createMessages(@Body() body : CreateMessageDto)
    {
        return this.messagesService.create(body.content)   
    }

    @Get('/:id')
    async getMessage(@Param('id') id : string)
    {
        const message = await this.messagesService.findOne(id);
        if(!message)
        {
            throw new NotFoundException('message not found');
        }
        return message;
    }
}
