import { Schema, Model, model } from 'mongoose'
import UserInterface from '../interfaces/User'
import EnderecoSchema from './Endereco'

const UserSchema = new Schema({
    nome: String,
    telefone: String,
    email: String,
    datanascimento: Date,
    endereco: EnderecoSchema,
    uid: String
}, {
    timestamps: true
})


export const User: Model<UserInterface> = model<UserInterface>('User', UserSchema)