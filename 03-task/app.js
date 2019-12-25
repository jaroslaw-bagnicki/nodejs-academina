const http = require('http');
const rootController = require('./rootController');

const server = http.createServer(rootController);

server.listen(3000, null, null, () => console.log('Server listening on port 3000.'));