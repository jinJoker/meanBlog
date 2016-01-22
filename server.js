var express = require('express');
var app = express();

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));

app.get('/', function(req,res){
    res.sendfile(__dirname + '/client/views/index.html');
});


app.listen(3000, function(){
    console.log('I\'m listening');
});