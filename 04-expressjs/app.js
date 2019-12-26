const express = require('express');

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
    console.log('Log from middleware');
    next();
});

app.use((req, res) => {
    console.log('Log from 2nd middleware');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
