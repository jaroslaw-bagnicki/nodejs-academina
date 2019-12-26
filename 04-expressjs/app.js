const express = require('express');
const logger = require('./middleware/logger');
const usersHandler = require('./middleware/usersHandler');
const addProductHandler = require('./middleware/addProductHandler');

const PORT = 3000;
const ROUTES = {
    HOME: '/',
    USERS: '/users',
    ADD_PRODUCT: '/add-product',
};

const app = express();

app.use(logger);
app.use(ROUTES.USERS, usersHandler);
app.use(ROUTES.ADD_PRODUCT, addProductHandler);
app.use(ROUTES.HOME, (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
