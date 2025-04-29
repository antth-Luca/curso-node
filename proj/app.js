var http = require('http');

http.createServer(function(req, res) {
    res.end('Ola, mundo!');
}).listen(8081);

console.log('O server está rodando!');
