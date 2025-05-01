
import style from "./styles.module.css"


interface UserProps{
    message: string
}

export function User({ message }: UserProps){
    return (
        <div className={ style.container }>
            <div>
                <p> { message } </p>
            </div>
        </div>
    )
}