import { createServer } from 'node:http'

// node --watch -> atualiza o servidor a cada alteração

// fs -> manipulação de arquivos
// crypto -> criptografia
// http -> criação de servidor
// request -> informações da requisição na api
// response -> resposta à requisição

// value -> tras as informações
// entries -> value + tras o id

const server = createServer((request, response) =>{
    response.write('Hello, World!')

    return response.end()
})

/* porta local host
server.listen(3333) */

// Request body -> em POST e PUT, corpo dos dados enviados

// 204 -> resposta com sucesso, porem, em branco