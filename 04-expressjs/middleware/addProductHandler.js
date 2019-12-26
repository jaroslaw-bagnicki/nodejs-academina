/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const addProductHandler = (req, res, next) => {
    const { method } = req;
    
    if (method === 'GET') {
        return res.send(`
            <html>
                <head>
                    <title>Node.js Course</title>
                </head>
                <body>
                    <h2>Add new product</h2>
                    <form method="POST">
                        <label for="name">Product name:</label>
                        <input type="text" name="name" />
                        <button type="submit">Add new product</button>
                    </form>
                </body>
            </html>
        `);
    }

    if (method === 'POST') {
        console.log('Add product request');
        console.log(req.body);
        return res.sendStatus(201);
    }

    next();
};

module.exports = addProductHandler;
