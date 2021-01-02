

const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('hello World');
// });
//
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`);
// })

const express = require('express');
const app = express();
var server = http.Server(app);


const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('public/main.html', {root: __dirname});
})

app.post('/', (req, res) => {
    console.log('Received')
    res.send('thanks')
})
//need to go to http://localhost:3000/main.html



server.listen(port, () => console.log(`Listening on port http://localhost:${port}`))


