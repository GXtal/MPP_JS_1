const express = require('express');
const Router = express.Router();

const controller = require('../../controllers/operatorsController.js');
const operators = require('../../entities/operators.js');

Router.get('/', function(req, res, next) {

    res.render('editOperator', {character: operators.getOperator(req.query.characterId)});

});

Router.post('/update', controller.updateOperator);
Router.post('/delete', controller.deleteOperator);

module.exports = Router;

