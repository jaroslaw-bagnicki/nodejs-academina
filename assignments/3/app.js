const express = require('express');
const morgan = require('morgan');

const homeRouter = require('./routes/homeRouter');
const usersRouter = require('./routes/usersRouter');

const app = express();

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(homeRouter);
app.use(usersRouter);

app.listen(3000, () => console.log('Server listen on 3000 port ...'));