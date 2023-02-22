const express = require("express");

const createError = require('http-errors');


const app = express();
const port = 5000;

// static files

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/controllers',express.static(__dirname + '/controllers'));
app.use('/entities',express.static(__dirname + '/entities'));

app.use(express.json());

//templating engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

//routes
const mainPage=require('./src/routes/mainpage');
const editOperator = require('./src/routes/editOperator');

app.use('/', mainPage);
app.use('/edit',editOperator);

app.use(function(req, res, next) {
    next(createError(404));
  });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
app.listen(port, () => console.log(`listnning on port ${port}`));