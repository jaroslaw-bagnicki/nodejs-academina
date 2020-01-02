const express = require('express');

const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const shopRouter = require('./routes/shopRouter');
const usersRouter = require('./routes/usersRouter');
const addProductRouter = require('./routes/addProductRouter');

const PORT = 3000;
const app = express();
app.set('view engine', 'pug');
app.set('views', 'src/views');

// Logger middleware
app.use(logger);

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

// Static files middleware
app.use(express.static('public'));

app.use(shopRouter);
app.use(usersRouter);
app.use(addProductRouter);

app.use(notFound);

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
