const express = require('express');
const db = require('./lib/staff.js');
const expresslayouts = require('express-ejs-layouts');
const app = express();

var router = require('./app/routes.js');
app.use('/',router);

app.use(express.static(__dirname + '/public'));

var port = 8080;
var url = 'mongodb://localhost:27017/myApp';

db.startDb(url,(err)=> {
    if(err) throw new Error(err);

    app.listen(port, (req,res)=>{
    console.log(`app listening at port ${port}`);
    } );

});


