const http = require('http');

const server = http.createServer((req, res) => {

    const pathName = req.url;
    if (pathName === '/') {
        res.end('scenario 1');
    }
    else if (pathName === '/api') {
        res.end('scenario 2');
    }
    else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "ABC": "DEF"
        });
        res.end('<h1 style="color:red">no page found</h1>');
    }
});

const portNumber = 3000;
const localhost = "127.0.0.1";
server.listen(portNumber, localhost)