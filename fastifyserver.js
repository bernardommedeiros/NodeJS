// criação de servidor com fastify
import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'Hello, World!';
})

server.get('/videos', () => {
    return "videos!";
})

// Route Parameter -> identificador unico

server.put('/videos/:id', () => {
    return "videos!";
})

server.get('/tech', () => {
    return 'This is a Node.JS Project!';
})

/*porta local host
server.listen ({
    port: 3333,
}) */