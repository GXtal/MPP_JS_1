const express= require('express');
const Router = express.Router();

const controller = require('../../controllers/operatorsController.js');
const operators = require('../../entities/operators.js');


Router.get('',(req,res)=>
{
    if(req.query.filter)
    {
        res.render('mainpage', {operators : operators.filterOperators(req.query.filter),flt: req.query.filter});
    }
    else
    {
        res.render('mainpage', {operators : operators.getOperators(),flt: undefined});
    }
    
})

Router.post('/new', controller.createOperator);

module.exports = Router;