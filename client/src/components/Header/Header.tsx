

import logo from "../../assets/furia.png"

import styles from "./styles.module.css"

export function Header(){
    return(
        <div className={styles.container}>

            <div>

                <img src={ logo } alt="Logo da Furia" />
                <h1>Furia Bot</h1>

            </div>

            <div>

                <h2>Converse com o Bot mais Furioso do CS</h2>
                <p>Tire suas dúvidas sobre o time, veja estátisticas, e acompanhe a Furia mais de perto.</p>
                
            </div>
        </div>
    )
}