const operators = require('../entities/operators.js')
const Character = require('../entities/character.js')

const deleteOperator=(req, res)=>{
    if(req.body){
        let id = req.body.id
        if(operators.deleteOperator(id)){
            return res.redirect("/");
        }
        else
            return res.sendStatus(404)
    }
    else
        return res.sendStatus(400)
}

const createOperator=(req, res)=>{

    let temp = operators.addOperator();
    console.log(temp);
    res.render("editOperator.ejs", {character : temp})
}

const updateOperator=(req, res)=>{
    if(!req.body) return res.sendStatus(400);

    console.log(req.body);
    
    let operator = new Character(parseInt(req.body.id, 10), req.body.name, req.body.type, req.body.rarity);
    operator.level=parseInt(req.body.level,10);
    operators.updateOperator(operator)
    return res.redirect("/")
}

const levelUpOperator=(req, res)=>{
    if(!req.body) return res.sendStatus(400);

    console.log("dhhgygygygyg");
    console.log(req.body);
    
    let operator = new Character(parseInt(req.body.id, 10), req.body.name, req.body.type, req.body.rarity);
    operator.levelChange(parseInt(req.body.level,10)+1)

    operators.updateOperatorE(operator)
    return res.redirect(`/edit?id=${operator.id}`);
}

module.exports = {deleteOperator, createOperator, updateOperator,levelUpOperator}