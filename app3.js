const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end("welcome to our first web server!")
})

const portNumber = 3000;
const localhost = "127.0.0.1";
server.listen(portNumber, localhost)