import { randomUUID } from "node:crypto"


type UserProps = {
    name: string
    email: string
    passwordHash: string

}

export class User{
    public readonly id: string

    public name: string
    public email: string
    public passwordHash: string
    
    constructor(props: UserProps, id?: string){
        this.id = id ?? randomUUID()
        
        this.name = props.name
        this.email = props.email
        this.passwordHash = props.passwordHash
    }
}


