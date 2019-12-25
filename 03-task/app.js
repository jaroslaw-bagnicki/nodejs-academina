const http = require('http');
const rootController = require('./rootController');

const server = http.createServer(rootController);

server.listen(3000, null, null, () => console.log('Server litening on port 3000.'));