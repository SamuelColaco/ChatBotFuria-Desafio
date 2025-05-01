

import WebSocket from "ws";
import http from  "node:http"

import { PrismaMessageRepository } from "./domain/repositories/PrismaRepository/PrismaMessageRepository";
import { ChatGateway } from "./gateway/ChatGateway";
import { CreateClassifierQuestion } from "./infra/providers/CreateClassifierQuestion";
import { CreateMessages } from "./useCase/MessageUseCase/CreateMessageUseCase/CreateMessageUseCase";

export function setupWebSocket(server: http.Server){
    const wss = new WebSocket.Server({ server })

    const messageUseCase = new CreateMessages(
        new PrismaMessageRepository(),
        new CreateClassifierQuestion()
    )

    const classifier = new CreateClassifierQuestion()

    const chatGateway = new ChatGateway(messageUseCase, classifier)

    wss.on('connection', (ws) => {
        chatGateway.handleConnection(ws)
    })
}