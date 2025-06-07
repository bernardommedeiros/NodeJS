import { fastify } from 'fastify'
import { DataBase } from "../database/db.js"

const server = fastify()
const database = new DataBase()


server.get('/', () => {

    return ("Hello, World!");
})

server.post('/products', (req, reply) => {
    const { title, description, price } = req.body
    database.create({
        title: title,
        description: description,
        price: price,
    })

    // status 201 = algo foi criado, convenção
    return (reply.status(201).send());
})

server.get('/products', (req, reply) => {
    const search = req.query.search;

    const products = database.list(search);

    return (reply.status(200).send( {products} ));
})


server.put('/products/:id', (req, reply) => {
    const productId = req.params.id;

    const { title, description, price } = req.body;

    const product = database.update(productId, {
        title: title,
        description: description,
        price: price,
    })
    return (reply.status(204).send());
})

server.delete('/products/:id', (req, reply) => {
    const productId = req.params.id;

    const product = database.delete(productId)

    return (reply.status(204).send());
})

server.get('/tech', () => {
    return 'This is a Node.JS Project!';
})

//porta local host
server.listen ({
    port: 3333,
})