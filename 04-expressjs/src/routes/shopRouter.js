const path = require('path');
const shopRouter = require('express').Router();
const { HOME } = require('../const/routes');

shopRouter.route(HOME)
    .get(function getHomePage(req, res) {
        res.sendFile(path.resolve('src/views/home.html'));
    });

module.exports = shopRouter;
