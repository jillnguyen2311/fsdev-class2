const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/') {
        res.end('scenario 1');
    }
    else if (pathName === '/about') {
        res.end('scenario 2');
    }
    else if (pathName === '/api') {
        fs.readFile(`${__dirname}/data.json`, 'utf-8', (err, data) => {
            const animalData = JSON.parse(data)
            res.writeHead(200, {
                'Content-type': 'application/json'
            });
            console.log(data);
            res.end(data);
        })
        const animalData = JSON
    }
    else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "ABC": "DEF"
        });
        res.end('<h1>no page found</h1>');
    }
});

const portNumber = 3000;
const localhost = "127.0.0.1";
server.listen(portNumber, localhost)