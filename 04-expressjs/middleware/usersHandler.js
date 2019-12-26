/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const usersHandler = (req, res) => {
    const users = ['user1', 'user2', 'user3'];
    res.send(`
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
};

module.exports = usersHandler;
