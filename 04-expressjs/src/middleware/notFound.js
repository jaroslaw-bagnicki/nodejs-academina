/** @type {import('express').RequestHandler} */
const notFoundMiddleware = (req, res) => {
    res.status(404).render('not-found', { title: 'Page not found'});
};

module.exports = notFoundMiddleware;
