import Endereco from './Endereco'
import { Document } from 'mongoose'

interface UserInterface extends Document{
    _id: string
    nome: string
    telefone: string
    email: string
    datanascimento: Date
    endereco: Endereco
}

export default UserInterface