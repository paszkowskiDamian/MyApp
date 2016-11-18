var express = require('express');
var router = express.Router();

var path = require('path');

module.exports = router;


router.get("/", (req,res)=> {
    res.sendFile(path.join(__dirname,'../index.html'));
} );

router.get('/about', (req,res)=>{
    res.send("hello about page");
} );

router.get('/contact', (req,res)=>{
    res.send('hello at contact page');
});

router.post('/contact', (res,req)=>{
    
} )

