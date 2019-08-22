import { Document } from 'mongoose'

interface EnderecoInterface extends Document{
    rua: string
    bairro: string
    cidade: string
}

export default EnderecoInterface