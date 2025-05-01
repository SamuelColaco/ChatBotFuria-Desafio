import { randomUUID } from "node:crypto"

type MessagesProps = {
    message: string
    question: string
}



export class Messages{
    public readonly id: string

    public message: string
    public question: string

    constructor(props: MessagesProps, id?: string){

        this.id = id ?? randomUUID()

        this.message = props.message
        this.question = props.question
    }
}