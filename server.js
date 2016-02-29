var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router.js');

//for css/js nav
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));

router(app);

app.listen(3000, function(){
    console.log('I\'m listening');
});