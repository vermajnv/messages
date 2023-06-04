import { MessageRepository } from './messages.repository';

export class MessageService {
    private messageRepo : MessageRepository
    constructor()
    {
        // Service is creating its own dependencies
        // DONT do this in real app
        this.messageRepo = new MessageRepository();
    }

    findOne(id : string)
    {
        return this.messageRepo.findOne(id)
    }

    findAll()
    {
        return this.messageRepo.findAll();
    }

    create(content : string)
    {
        return this.messageRepo.create(content)
    }
}