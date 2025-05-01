import { CreateUser } from "../../../useCase/UserUseCase/CreateUserUseCase/CreateUserUseCase";
import { z } from "zod";

import { Request, Response } from "express"

export class CreateUserController{
    constructor(
        private createUserUseCase: CreateUser
    ){}

    async create(req: Request, res: Response ){

        const bodySchema = z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(6, { message: "De senha tem que conter seis caracteres"})
        })

        const { name, email, password } = bodySchema.parse(req.body)

        await this.createUserUseCase.execute({ name, email, password })

        res.status(201).json()
    }
}