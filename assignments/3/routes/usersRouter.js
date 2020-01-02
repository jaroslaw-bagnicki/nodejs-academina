const express = require('express');
const path = require('path');

const usersRouter = express.Router();

usersRouter.route('/users')
    .get((req, res) => res.sendFile(path.resolve('views/users.html')));

module.exports = usersRouter;