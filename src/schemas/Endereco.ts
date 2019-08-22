import { Schema } from 'mongoose'

const EnderecoSchema = new Schema({
    rua: String,
    bairro: String,
    cidade: String
})

export default EnderecoSchema
