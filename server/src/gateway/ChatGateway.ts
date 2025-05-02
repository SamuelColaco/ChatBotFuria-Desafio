
import WebSocket from "ws"
import { CreateMessages } from "../useCase/MessageUseCase/CreateMessageUseCase/CreateMessageUseCase";
import { IGetQuestion } from "../domain/interfaces/IGetQuestion";

export class ChatGateway{
    constructor(
        private createMessageUseCase: CreateMessages,
        private createClassifierQuestion: IGetQuestion
    ){}

    handleConnection(ws: WebSocket){
        ws.on("message", async(data) => {
            const questions = data.toString()
            
            
            await this.createMessageUseCase.execute({ response: questions, question: questions})
            
            const response = this.createClassifierQuestion.getQuestion(questions)
            ws.send(`${response}`)
        })
    }
}
