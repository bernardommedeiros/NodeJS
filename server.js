// criação de servidor com fastify
import { createServer } from 'node:http'

const server = Fastify()

server.get('/', () => {
    return 'Hello, World!';
})

server.get('/welcome', () => {
    return "Bernardo's Project!";
})

server.get('/welcome', () => {
    return 'This is a Node.JS Project!';
})

//porta local host
server.listen ({
    port: 3333,
})