import { fastify } from 'fastify'
import { DataBase } from "./db.js"

const server = fastify()
const database = new DataBase()


server.get('/', () => {

    return ("Hello");
})

server.post('/products', (request, reply) => {
    const { title, description, price } = request.body
    database.create({
        title: title,
        description: description,
        price: price,
    })

    // status 201 = algo foi criado, convenção
    return reply.status(201).send()
})

server.get('/products', (request, reply) => {
    const products = database.list()

    return reply.status(200).send( {products} );
})

// Request body -> em POST e PUT, corpo dos dados enviados

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