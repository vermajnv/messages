import {readFile, writeFile} from 'fs/promises'

export class MessageRepository {
    async findOne(id : string)
    {
        const content = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);
        console.log(id);
        
        return messages[id];
    }

    async findAll()
    {
        const content = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);

        return messages;
    }

    async create(content : string)
    {
        const contents = await readFile('messages.json', 'utf-8');

        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);

        messages[id] = {
            id, 
            content
        };
        
        const contentString = JSON.stringify(messages);

        const newContent = await writeFile('messages.json', contentString);
    }
}