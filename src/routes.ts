import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.BuscarTodos)
routes.get('/users/:id', UserController.BuscarPorID)
routes.post('/users', UserController.criar)
routes.put('/users/:id', UserController.atualizar)
routes.delete('/users/:id', UserController.deletar)

export default routes