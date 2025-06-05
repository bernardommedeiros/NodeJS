import { createServer } from 'node:http'

// fs -> manipulação de arquivos
// crypto -> criptografia
// http -> criação de servidor

// request -> informações da requisição na api
//  response -> resposta à requisição
const server = createServer((request, response) =>{
    response.write('Hello, World')

    return response.end()
})

//porta local host
server.listen(3333)