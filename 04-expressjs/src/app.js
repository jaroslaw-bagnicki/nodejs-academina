const express = require('express');
const handlebars = require('express-handlebars');

const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const shopRouter = require('./routes/shopRouter');
const usersRouter = require('./routes/usersRouter');
const adminRouter = require('./routes/adminRouter');
const { productController } = require('./routes/productController');

const PORT = 3000;
const app = express();

app.engine('hbs', handlebars());

app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Logger middleware
app.use(logger);

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

// Static files middleware
app.use(express.static('public'));

app.use(shopRouter);
app.use(usersRouter);
app.use(adminRouter);
app.use(productController);

app.use(notFound);

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
