import { Request, Response } from 'express'
import { User } from '../schemas/User'

class UserController {
    public async BuscarTodos (req: Request, res: Response): Promise<Response> {
        const users = await User.find()
    
        return res.json(users)
    }

    public async criar (req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body)

        return res.json(user)
    }

    public async atualizar (req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        try {
            const result = await User.updateOne({ "_id" : id },req.body)
            return res.json(result)
        }catch (e){
            return res.json(e)
        }
    }

    public async deletar (req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        try {
            const result = await User.deleteOne({ "_id" : id })
            return res.json(result)
        }catch (e){
            return res.json(e)
        }
    }

    public async BuscarPorID (req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const user = await User.findById(id)

        return res.json(user)
    }
}

export default new UserController()