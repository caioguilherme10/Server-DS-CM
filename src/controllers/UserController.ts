//import { Request, Response } from 'express'
import * as express from 'express';
import { User } from '../schemas/User'
//import UserInterface from '../interfaces/User'
import { Controller, Route, Get, Post, Put, Delete, Body, Request} from 'tsoa'

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
    @Get()
    public async BuscarTodos(): Promise<UserInterfaceAbstraction[]> {
        const users = await User.find()
        return users
    }

    @Get('/login/{uid}')
    public async Login(uid: string): Promise<UserInterfaceAbstraction[]> {
        const user = await User.find({ "uid" : uid })
        return user
    }

    @Post()
    public async criar(@Request() request: express.Request): Promise<UserInterfaceAbstraction> {
        const user = await User.create(request.body)
        return user
    }

    @Put('/{id}')
    public async atualizar(id: string,@Request() request: express.Request): Promise<any> {
        const result = await User.updateOne({ "_id" : id },request.body)
        return result
    }

    @Delete('/{id}')
    public async deletar(id: string): Promise<any> {
        const result = await User.deleteOne({ "_id" : id })    
        return result
    }

    @Get('/{id}')
    public async BuscarPorID(id: string): Promise<UserInterfaceAbstraction> {
        const user = await User.findById(id)
        return user
    }
}