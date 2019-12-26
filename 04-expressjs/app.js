const http = require('http');
const express = require('express');

const PORT = 3000;

const app = express();

const server = http.createServer(app);

server.listen(PORT, null, null, () => console.log(`Server started on port ${PORT}.`));
