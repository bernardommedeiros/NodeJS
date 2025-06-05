import { fastify } from 'fastify'
import { db } from "./db.js"

const server = fastify()

server.get('/', () => {
    return 'Seja bem vindo a loja!';
})

server.get('/products', () => {
    return "Bernardo's Products!";
})

server.put('/products/:id', () => {
    return "Change the selected product";
})

server.delete('/products/:id', () => {
    return "Delete the selected Product";
})

server.get('/tech', () => {
    return 'This is a Node.JS Project!';
})

//porta local host
server.listen ({
    port: 3333,
})