import { User } from "../../../domain/entities/User";
import { IHashProvider } from "../../../domain/interfaces/IHashProvider";
import { IUserRepository } from "../../../domain/repositories/UserRepository";
import { AppError } from "../../../utils/AppError";
import { CreateUserUseCaseDTO } from "./CreateUserUseCaseDTO";


export class CreateUser{
    constructor(
        private userRepository: IUserRepository,
        private createBcryptHash: IHashProvider

    ){} 
    async execute({ name, email, password}: CreateUserUseCaseDTO ){

        const userExist = await this.userRepository.findUserByEmail(email)

        if(userExist){
            throw new AppError("Usuário já cadastrado")
        }

        const passwordHash = await this.createBcryptHash.hash(password)

        const user = new User({ name, email, passwordHash })

        await this.userRepository.save(user)
    }
}