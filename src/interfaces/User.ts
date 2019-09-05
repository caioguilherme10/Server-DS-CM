import Endereco from './Endereco'
import { Document } from 'mongoose'

interface UserInterface extends Document{
    _id: string
    nome: string
    telefone: string
    email: string
    datanascimento: Date
    endereco: Endereco,
    uid: string
}

export default UserInterface