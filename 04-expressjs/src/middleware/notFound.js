/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const notFoundMiddleware = (req, res) => {
    res.status(404).render('not-found', { title: 'Page not found'});
};

module.exports = notFoundMiddleware;
