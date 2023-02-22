const fs = require('fs')
const path = require('path')

const operatorsDB = path.resolve(__dirname, "operators.json")

const getOperators = ()=>{
    let data = "";
    let operators = [];

    try {
        data = fs.readFileSync(operatorsDB, "utf8");
    } catch(error) {
        console.error(error);
    }

    try {
        operators = JSON.parse(data);
    } catch(error) {
        console.error(error);
        fs.writeFileSync(operatorsDB, '[]');
        operators = [];
    }

    return operators;
}

const rewriteOperators = (operators)=>{
    let data = JSON.stringify(operators);
    fs.writeFileSync(operatorsDB, data);
}

module.exports = {getOperators, rewriteOperators}