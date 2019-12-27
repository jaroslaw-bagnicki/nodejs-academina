/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const notFoundMiddleware = (req, res) => {
    res.status(404)
        .send('<h1>Page not found :(</h1>');
};

module.exports = notFoundMiddleware;
