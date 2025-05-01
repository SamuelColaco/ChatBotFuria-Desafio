import { PrismaMessageRepository } from "../../../domain/repositories/PrismaRepository/PrismaMessageRepository";
import { CreateClassifierQuestion } from "../../../infra/providers/CreateClassifierQuestion";
import { CreateMessages } from "../../../useCase/MessageUseCase/CreateMessageUseCase/CreateMessageUseCase";
import { CreateMessageController } from "../../controller/MessageController/CreateMessageController";


const messageRepository = new PrismaMessageRepository()

const createClassifierQuestion = new CreateClassifierQuestion()

const createMessageUseCase = new CreateMessages(messageRepository, createClassifierQuestion)


export const createMessageController = new CreateMessageController(createMessageUseCase)