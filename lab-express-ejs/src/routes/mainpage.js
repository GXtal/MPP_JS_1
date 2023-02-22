const express= require('express');
const Router = express.Router();

Router.get('',async(req,res)=>
{
    res.render('mainpage');
})

module.exports = Router;