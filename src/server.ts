import app from './app'
import * as http from 'http'

const PORT = 3333
const server = http.createServer(app)

server.listen(PORT)

server.on('listening', () => {
	console.info(`Ouvindo na porta ${PORT}`);
});