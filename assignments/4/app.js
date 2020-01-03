const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();

app.engine('hbs', handlebars({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('home', { title: 'Home' }));

app.get('/users', (req, res) => res.render('users', { title: 'Users' }));

app.post('/add-user', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => console.log('Server listen on port 3000...'));