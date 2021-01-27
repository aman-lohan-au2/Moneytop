var express = require('express');
var app = express();
var fs = require('fs');


 var rawdata = fs.readFileSync('hotel.json');
  let data = JSON.parse(rawdata);

  app.get('/hotel',function(req,res){
    res.json(data)
    
})

app.use(function(req,res,next){
    
    console.log(req.protocol + req.method + req.originalUrl)
    next();
});

app.get('/Welcome',function(req,res){
    res.sendfile("Welcome To Your Hotel")
})

app.use(function(req,res,next){
    console.log('Timer:',Date.now())
    next()
})

app.use(express.static('public'));

app.listen(3002);