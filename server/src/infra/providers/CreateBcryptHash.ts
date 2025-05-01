import { hash } from "bcrypt";
import { IHashProvider } from "../../domain/interfaces/IHashProvider";

export class CreateBcryptHash implements IHashProvider{
    async hash(password: string): Promise<string> {
        return await hash(password, 8)
    }
}