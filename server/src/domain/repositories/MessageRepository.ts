import { Messages } from "../entities/Messages";

export interface IMessageRepository{
    save(message: Messages): Promise<void>
}