const express = require('express');
const path = require('path');

const homeRouter = express.Router();

homeRouter.route('/')
    .get((req, res) => res.sendFile(path.resolve('views/home.html')));

module.exports = homeRouter;