const express = require('express');
const Router = express.Router();
const { login, post } = require('../controllers/userController');

Router.post('/login', login);
Router.post('', post);

module.exports = Router;
