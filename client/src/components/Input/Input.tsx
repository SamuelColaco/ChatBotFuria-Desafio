
import React from "react"
import styles from "./styles.module.css"

interface InputProps{
    value: string
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ value, onChange }: InputProps) {
    return (
        <div className={ styles.container }>
            <input type="text" placeholder="Digite sua pergunta" 
            value={value}
            onChange={onChange}
            />
        </div>
    )
}