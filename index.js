const jsonServer = require('json-server');
const server = jsonServer.create();

const cors = require('cors');

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 8000

server.listen(PORT);
