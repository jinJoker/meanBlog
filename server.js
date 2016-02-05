var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));

app.get('/', function(req,res){
    res.sendfile(__dirname + '/client/views/index.html');
});

app.get('/api/blogs', function(req, res) {
    res.send([
        {"title":"开始用中文啦！遇到没办法在bootstrap的panel换行的问题","content":"之前做完了使用了bootstrap的静态页面，今天开始加入AngularJS的数据绑定。<br/>在把原来写在html里的blog搬到前台controller的json里的时候，发现了没有办法换行的问题。<br/>于是google了一下，发现需要用到一个angular-sanitize.min.js的库。<br/>在需要render成html的DOM里加ng-bind-html=\"blog.content | trusthtml\"，<br/>并且加上controller里加上一个函数：<br/> return $sce.trustAsHtml<br/>"},
        {"title":"Starting build blog site with MEAN Stack","content":"Actually, this is the first deliveried version, and without any backend database running.<br/>The most difficult thing to me is that how to use HTML/CSS, or we call it HTML5, to build the frontend.<br/>But sooner or later, I think I will get used of these staffs.<br/>Here is the list of components or sites or whatever I used:<br/>VPS: DigitalOcean<br/>Linux: Ubuntu<br/>DNS: oray.com<br/>Framework: MEAN stack<br/>git: jinJoker/meanBlog<br/>"}
    ]);
})

app.listen(3000, function(){
    console.log('I\'m listening');
});