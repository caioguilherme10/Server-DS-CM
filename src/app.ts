import * as express from 'express'
import * as cors from 'cors'
import * as mongoose from 'mongoose'

import routes from './routes'

import { requestLoggerMiddleware } from './request.logger.middleware'

class App {
    public express: express.Application
  
    public constructor () {
      this.express = express()
  
      this.middlewares()
      this.database()
      this.routes()
    }
  
    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
      this.express.use(requestLoggerMiddleware)
    }
  
    private database (): void {
      mongoose.connect(`mongodb+srv://caioguilherme:caio0123@cluster0-jb0lq.mongodb.net/user?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(() => {
        console.info('Connected to Mongo.')
      }).catch((err: any) => {
        console.error(err)
      })
    }
  
    private routes (): void {
      this.express.use(routes)
    }
}
  
export default new App().express