/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const notFoundMiddleware = (req, res) => {
    res.writeHead(404)
        .send('<h1>Page not found :(');
};

module.exports = notFoundMiddleware;
