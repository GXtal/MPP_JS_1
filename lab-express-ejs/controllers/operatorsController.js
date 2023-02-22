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
    res.render("editOperator.ejs", {character : operators.createOperator()})
}

const updateOperator=(req, res)=>{
    if(!req.body) return res.sendStatus(400);

    let operator = new Character(parseInt(req.body.characterId, 10), req.body.characterName, req.body.characterType, req.body.characterRarity);
    operators.updateOperator(operator)
    return res.redirect("/")
}

module.exports = {deleteOperator, createOperator, updateOperator}