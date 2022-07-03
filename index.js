const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to NODE JS!!');
        res.end();
    } else if (req.url === '/about') {
        res.write('<h1>About</h1>');
        res.write('<h6>We are in learning state</h6>');
        res.end();
    } else {
        res.write('<h1>NOT FOUND 404 !! </h1>');
        res.end();
    }
});
const PORT = 9000;
server.listen(PORT);
console.log('Listening port is ', PORT);
