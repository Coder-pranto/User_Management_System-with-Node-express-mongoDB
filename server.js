const express = require('express')
const app = express()
const path = require('path');
const router = require('./server/routes/router');
require('dotenv').config({path:'config.env'})
const morgan = require('morgan')
const chalk = require('chalk')
const port = process.env.PORT || 5000

//log request 
app.use(morgan('tiny'));

//database connect
require('./server/database/connection');
console.clear();




//view engine
app.set('view engine', 'ejs')
//app.set('view engine',path.resolve(__dirname,'views/pages')) //for multifolder


//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//load assets (static files)
app.use(express.static('assets'))
app.use('/css',express.static(__dirname + 'assets/css'))
app.use('/js',express.static(path.join(__dirname, 'assets/js')))
app.use('/img',express.static(path.resolve(__dirname, 'assets/img')))

//load router
app.use(router);



app.listen(port , ()=> console.log(chalk.bgCyan.bold.underline(`> Server is up and running on port : http://localhost:${port} `)))