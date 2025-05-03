
import { useEffect, useRef, useState } from "react";

interface IChatMessage{
    id: string
    message: string
    sender: 'user' | 'bot'
    time: Date
}
export const useWebSocket = (url: string) => {

    const [messages, setMessages] = useState<IChatMessage[]>([])
    const [isConnected, setIsConnected] = useState(false)

    const ws = useRef<WebSocket | null>(null)
    

    useEffect(() => {
        ws.current = new WebSocket(url)

        ws.current.onopen = () =>{
            setIsConnected(true)
        }

        ws.current.onmessage = (event) => {
            const botResponse = event.data

            setMessages(prev => [
                ...prev,
                {
                    id: Date.now().toString(),
                    message: botResponse,
                    sender: 'bot',
                    time: new Date()
                }
            ])
        }

        ws.current.onclose = () =>{
            setIsConnected(false)
        }

        return () => {
            if (ws.current && ws.current.readyState === WebSocket.OPEN){
                ws.current.close()
            }
        }
    }, [url])

    const sendMessage = (message: string) => {
        if(ws.current && isConnected){
            setMessages(prev => [
                ...prev,
                {
                    id: Date.now().toString(),
                    message: message,
                    sender: 'user',
                    time: new Date()
                }
            ])

            ws.current.send(message)
        }
    }

    return { messages, sendMessage, isConnected}
}