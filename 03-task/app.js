const http = require('http');

const server = http.createServer(() => console.log('Hello from Node.js!'));

server.listen(3000, null, null, () => console.log('Server litening on port 3000.'));