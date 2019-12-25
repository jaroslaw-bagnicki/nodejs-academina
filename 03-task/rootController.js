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
                return res.writeHead(200, {
                    'Content-Type': 'text/html',
                }).end(`
                    <html>
                        <head>
                            <title>Task #3</title>
                        </head>
                        <body>
                            <h1>Greetings from homepage!</h1>
                        </body>
                    </html>
                `);
            }
        case ROUTES.users: {
            logRequestDetails(req);
            const users = ['user1', 'user2', 'user3'];
            return res.writeHead(200, {
                'Content-Type': 'text/html',
            }).end(`
                <html>
                    <head>
                        <title>Task #3</title>
                    </head>
                    <body>
                        <h2>Users</h2>
                        <ul>
                            ${users.map(user => `<li>${user}</li>`).join('')}
                        </ul>
                    </body>
                </html>
            `);
        }
        default: {
            logRequestDetails(req);
            res.statusCode = 404;
            return res.end();
        }
    }
};

module.exports = rootController;