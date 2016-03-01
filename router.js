var blogDBService = require('./server/controllers/blogDBService.js');

module.exports = function(app){

    app.get('/', function(req,res){
        res.sendfile(__dirname + '/client/views/index.html');
    });

    app.get('/api/blog-list', blogDBService.list);
    
    app.get('/api/blogs/:ts?', blogDBService.detail);
    
    
}