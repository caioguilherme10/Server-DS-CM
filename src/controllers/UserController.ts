//import { Request, Response } from 'express'
import * as express from 'express'
import * as jwt from 'jsonwebtoken'
import { User } from '../schemas/User'
//import UserInterface from '../interfaces/User'
import { Controller, Route, Get, Post, Put, Delete, Request,  Security} from 'tsoa'

//import { Document } from 'mongoose'

interface EnderecoInterfaceAbstraction {
    rua: string
    bairro: string
    cidade: string
}

interface UserInterfaceAbstraction {
    _id: string
    nome: string
    telefone: string
    email: string
    datanascimento: Date
    endereco: EnderecoInterfaceAbstraction,
    uid: string
}

@Route('/users')
export class UserController extends Controller{

    @Security('api_token')
    @Get()
    public async BuscarTodos(): Promise<UserInterfaceAbstraction[]> {
        const users = await User.find().select({ uid: 0, _id: 0 })
        return users
    }

    @Get('/login/{uid}')
    public async Login(uid: string): Promise<any> {
        const user = await User.findOne({ "uid" : uid })
        if(user){
            const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
            const result = {
                access_token: token
            }
            return result
        }else {
            const result = {
                access_token: 'invalido'
            }
            return result
        }
    }

    @Post()
    public async criar(@Request() request: express.Request): Promise<UserInterfaceAbstraction> {
        const user = await User.create(request.body)
        return user
    }

    @Security('api_token')
    @Put('/{id}')
    public async atualizar(id: string,@Request() request: express.Request): Promise<any> {
        const result = await User.updateOne({ "_id" : id },request.body)
        return result
    }

    @Security('api_token')
    @Delete('/{id}')
    public async deletar(id: string): Promise<any> {
        const result = await User.deleteOne({ "_id" : id })    
        return result
    }

    @Security('api_token')
    @Get('/{id}')
    public async BuscarPorID(id: string): Promise<UserInterfaceAbstraction> {
        const user = await User.findById(id)
        return user
    }
}