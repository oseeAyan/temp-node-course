//Last kind of nodejs module
// The big one that could allow us to create web server and API
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page!');
    }
    if (req.url === '/about') {
        res.end('Welcome to our history page!')
    }
    // ending the request
    res.end(`Oops`);
})

server.listen(5000)