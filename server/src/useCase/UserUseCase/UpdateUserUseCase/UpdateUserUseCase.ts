import { IHashProvider } from "../../../domain/interfaces/IHashProvider";
import { IUserRepository } from "../../../domain/repositories/UserRepository";
import { AppError } from "../../../utils/AppError";
import { UpdateUserUseCaseDTO } from "./UpdateUserUseCaseDTO";

export class UpdateUser{
    constructor(
        private userRepository: IUserRepository,
        private createBcryptHash: IHashProvider
    ){}

    async execute({ id, name, email, password }: UpdateUserUseCaseDTO){

        const userExist = await this.userRepository.findUserByEmail(id)

        if(!userExist){
            throw new AppError("Usuário não existe", 401)
        }

        if(name){
            userExist.name = name
        }

        if(email){
            userExist.email = email
        }

        if(password){
            userExist.passwordHash = await this.createBcryptHash.hash(password)
        }

        await this.userRepository.save(userExist)
    }
}