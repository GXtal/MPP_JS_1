const express= require('express');
const Router = express.Router();

const controller = require('../../controllers/operatorsController.js');
const operators = require('../../entities/operators.js');


Router.get('',async(req,res)=>
{
    res.render('mainpage', {operators : operators.getOperators()});
})

Router.post('/new', controller.createOperator);

module.exports = Router;