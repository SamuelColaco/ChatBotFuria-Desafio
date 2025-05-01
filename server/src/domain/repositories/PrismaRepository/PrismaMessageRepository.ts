import { prisma } from "../../../database/prisma";
import { Messages } from "../../entities/Messages";
import { IMessageRepository } from "../MessageRepository";

export class PrismaMessageRepository implements IMessageRepository{
    async save(message: Messages): Promise<void> {
        await prisma.message.create({ data: { question: message.question, message: message.message }})
    }
}