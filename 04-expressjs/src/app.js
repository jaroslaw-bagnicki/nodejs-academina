const express = require('express');
const logger = require('./middleware/logger');
const usersRouter = require('./routes/usersHandler');
const addProductRouter = require('./routes/addProductRouter');
const ROUTES = require('./const/routes');

const PORT = 3000;
const app = express();

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.get(ROUTES.HOME, (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});
app.use(usersRouter);
app.use(addProductRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
