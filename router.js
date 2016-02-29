var router = require('./server/controllers/blogDBService.js');

module.exports = function(app){

    app.get('/', function(req,res){
        res.sendfile(__dirname + '/client/views/index.html');
    });

    app.get('/api/blogs', router.list);
}