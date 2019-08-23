import app from './app'
import * as http from 'http'

import { RegisterRoutes } from './routes'

const PORT = 3333

//RegisterRoutes(app.es)

const server = http.createServer(app)

server.listen(PORT)

server.on('listening', () => {
	console.info(`Ouvindo na porta ${PORT}`);
});