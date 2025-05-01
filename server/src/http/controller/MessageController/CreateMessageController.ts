import { z } from "zod";
import { CreateMessages } from "../../../useCase/MessageUseCase/CreateMessageUseCase/CreateMessageUseCase";


import { Request, Response } from "express"
export class CreateMessageController{
    constructor(
        private createMessageUseCase:  CreateMessages
    ){}

    async create(req: Request, res: Response){

        const bodySchema = z.object({
            questions: z.string()
        })

        const { questions } = bodySchema.parse(req.body)

        await this.createMessageUseCase.execute({ questions })
    }
}