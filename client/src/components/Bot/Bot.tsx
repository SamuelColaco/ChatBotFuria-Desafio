

import logo from "../../assets/bot.png"

import styles from "./styles.module.css"

interface BotProps{
    message: string
}
export function Bot({ message }: BotProps){

    return (
        <div className={ styles.container }>
            <img src={ logo } alt="Bot da furia" />
            <div className={ styles.response }>
                <p>{message.length > 0 ? message : "Olá, seja bem vindo!!!"}</p>
            </div>
        </div>
    )
}