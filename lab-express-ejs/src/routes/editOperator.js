const express = require('express');
const Router = express.Router();

const controller = require('../../controllers/operatorsController.js');
const operators = require('../../entities/operators.js');

Router.get('/', function(req, res, next) {
    
    let temp = operators.getOperator(req.query.id);
    res.render('editOperator', {character: temp});
});

Router.post('/update', controller.updateOperator);
Router.post('/delete', controller.deleteOperator);

module.exports = Router;

