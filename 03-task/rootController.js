const ROUTES = {
    home: '/',
    users: '/users',
    createUser: '/create-user',
};

/**
 * 
 * @param {import('http').IncomingMessage} req Request object
 */
const logRequestEvent = (req) => {
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

    const { url, method } = req;
    const [ route, query ] = url.split('?');
    switch(route) {
        case ROUTES.home: {
                logRequestEvent(req);
                return res.writeHead(200, {
                    'Content-Type': 'text/html',
                }).end(`
                    <html>
                        <head>
                            <title>Task #3</title>
                        </head>
                        <body>
                            <h1>Greetings from homepage!</h1>
                            <form method="POST" action="/create-user">
                                <label for="username">User name: </label>
                                <input type="text" name="username" required />
                                <button type"submit">Create new user</button>
                            </form>
                        </body>
                    </html>
                `);
            }
        case ROUTES.users: {
            logRequestEvent(req);
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
        case ROUTES.createUser: {
            logRequestEvent(req);
            if (method === 'POST') {
                const chunks = [];
                req.on('data', chunk => chunks.push(chunk));
                req.on('end', () => {
                    const body = Buffer.concat(chunks);
                    console.log({
                        body: body.toString(),
                    });
                    return res.writeHead(302, {
                        'Location': '/users',
                    }).end();
                });
                break;
            } else {
                return res.writeHead(400, 'Invalid http method. Use POST').end();
            }
        }
        default: {
            logRequestEvent(req);
            res.statusCode = 404;
            return res.end();
        }
    }
};

module.exports = rootController;