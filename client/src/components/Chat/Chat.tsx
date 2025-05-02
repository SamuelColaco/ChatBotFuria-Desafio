
import React, { useState } from "react"
import { Bot } from "../Bot/Bot"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { User } from "../User/User"
import styles from "./styles.module.css"
import { useWebSocket } from "../../hooks/useWebSocket"


export function Chat(){

    const [inputValue, setInputValue] = useState('')
    const { messages, sendMessage } = useWebSocket('wss://chatbotfuria-desafio.onrender.com')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        if(inputValue.trim()){
            sendMessage(inputValue)
            setInputValue('')
        }
    }
    return (
        <div className={styles.container}>
            <div className={ styles.chat }>
            <div>
                <Bot message="Olá, o que deseja perguntar?" />
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
                        {msg.sender === 'user' ? <User message = { msg.message } /> : <Bot message =  { msg.message }  />}
                    </div>
                ))}
            </div>
            <form  onSubmit={handleSubmit} className={ styles.message }>
                <Input
                value = {inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
                />
                <Button />
            </form>
            </div>
        </div>
    )
}