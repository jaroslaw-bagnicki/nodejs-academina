const express = require('express');
const logger = require('./middleware/logger');
const usersHandler = require('./middleware/usersHandler');
const addProductRouter = require('./middleware/addProductRouter');
const ROUTES = require('./const/routes');

const PORT = 3000;
const app = express();

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(ROUTES.USERS, usersHandler);
app.use(addProductRouter);
app.use(ROUTES.HOME, (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
