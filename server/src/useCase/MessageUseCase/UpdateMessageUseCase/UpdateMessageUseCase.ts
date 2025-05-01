import { Messages } from "../../../domain/entities/Messages";
import { IGetQuestion } from "../../../domain/interfaces/IGetQuestion";
import { IMessageRepository } from "../../../domain/repositories/MessageRepository";
import { UpdateMessageUseCaseDTO } from "./UpdateMessageUseCaseDTO";

export class UpdateMessage{
    constructor(
        private messageRepository: IMessageRepository,
        private createClassifierQuestion: IGetQuestion
    ){}

    async execute({ message }: UpdateMessageUseCaseDTO){

        const messages = new Messages({
            userId: message,
            message
        })
        
        await this.messageRepository.save(messages)
    }
}