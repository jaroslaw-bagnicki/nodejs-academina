const express = require('express');

const shopRouter = express.Router();

shopRouter.get('/', function getHomePage(req, res) {
        res.render('home', { activeHome: true });
    });

module.exports = shopRouter;
