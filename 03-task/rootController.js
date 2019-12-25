const ROUTES = {
    home: '/',
    users: '/users',
};

/**
 * 
 * @param {import('http').IncomingMessage} req Request object
 */
const logRequestDetails = (req) => {
    const { url, method} = req;
    const date = new Date().toISOString();
    console.log(`[${date}] ${method} on ${url}`);
};

/**
 * 
 * @param {import('http').IncomingMessage} req Request object
 * @param {import('http').ServerResponse} res Response object
 */
const rootController = (req, res) => {

    const { url } = req;
    switch(url) {
        case ROUTES.home: {
                logRequestDetails(req);
                return res.end();
            }
        case ROUTES.users: {
            logRequestDetails(req);
            return res.end();
        }
        default: {
            logRequestDetails(req);
            res.statusCode = 404;
            return res.end();
        }
    }
};

module.exports = rootController;