const operatorsDao = require('../dao/operatorsDao.js')
const Character = require('./character.js')

let operators = operatorsDao.getOperators();

const addOperator = ()=>
{
    let id = 0
    for(let i = 0; i < operators.length; i++){
        if(id < operators[i].id){
            id = operators[i].id
        }
    }
    id++;
    let operator = new Character(id, "Knight","Sniper",1);
    operators.push(operator);
    operatorsDao.rewriteOperators(operators);
    return operator;
}

const deleteOperator=(id)=>{
    for(let i = 0; i < operators.length; i++){
        if(id == operators[i].id){
            operators.splice(i, 1);
            operatorsDao.rewriteOperators(operators);
            return true
        }
    }
    return false
}

const updateOperator=(operator)=>{
    for(let i = 0; i < operators.length; i++){
        if(operator.id == operators[i].id){
            operators[i] = operator;
            break;
        }
    }
    operatorsDao.rewriteOperators(operators);
}

const getOperator=(id)=>{
    let operator = null;
    for(let i = 0; i < operators.length; i++){
        if(id == operators[i].id){
            operator = operators[i]
            break;
        }
    }

    return operator;
}

const getOperators=()=>{
    return operators;
}

module.exports = {addOperator, deleteOperator, updateOperator, getOperators, getOperator}