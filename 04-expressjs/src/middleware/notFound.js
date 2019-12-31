const path = require('path');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const notFoundMiddleware = (req, res) => {
    res.status(404).sendFile(path.resolve('src/views/not-found.html'));
};

module.exports = notFoundMiddleware;
