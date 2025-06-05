import { fastify } from 'fastify'
import { DataBase } from "./db.js"

const server = fastify()
const database = new DataBase()

server.post('/', () => {
    return 'Seja bem vindo a loja!';
})

// reply -> response

server.post('/products', (request, reply) => {
    database.create({
        title: "Produto 01",
        description: "Primeiro produto",
        value: 20,
    })

    console.log(database.list());

        // status 201 = algo foi criado, convenão
    return reply.status(201).send()
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