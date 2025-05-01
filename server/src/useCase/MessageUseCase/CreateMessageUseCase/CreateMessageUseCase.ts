import { Messages } from "../../../domain/entities/Messages";
import { IGetQuestion } from "../../../domain/interfaces/IGetQuestion";
import { IMessageRepository } from "../../../domain/repositories/MessageRepository";
import { CreateClassifierQuestion } from "../../../infra/providers/CreateClassifierQuestion";
import { CreateMessageUseCaseDTO } from "./CreateMessageUseCaseDTO";

export class CreateMessages{
    constructor(
        private messageRepository: IMessageRepository,
        private createClassifierQustion: IGetQuestion
    ){}

    async execute({ questions, question }: CreateMessageUseCaseDTO){

        const message = this.createClassifierQustion.getQuestion(questions)

        const messages = new Messages({ message, question})

        await this.messageRepository.save(messages)
    }
}