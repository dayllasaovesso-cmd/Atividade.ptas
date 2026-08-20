import http from 'node:http'
import { url } from 'node:inspector';
import { URL } from 'node:url'

const port = 3000

const status = {
    "status": "ok",
    "date": new Date().toISOString()
}

server.on('request', (req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);
    console.log('data e hora: ${new date().toiSOString()')

    res.statusCode = 201
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    //a página trava

});

server.listen(port, () => {
    console.log("Servidor funcionando na porta ", port)
});
