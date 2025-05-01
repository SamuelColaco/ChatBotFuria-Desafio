import { Messages } from "../../../domain/entities/Messages"

export interface CreateUserUseCaseDTO{
    name: string
    email: string
    password : string
}