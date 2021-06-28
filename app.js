let express = require('express');
let app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/topic', function(req, res){
    res.send(req.query.id);
});

app.get('/template', function(req, res){
    res.render('temp', {time: Date(), _title:'Jade'});
});

app.get('/', function(req, res){
    res.send('Hello home page');
});

app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/턱괸고앵.jpg">');
});


app.get('/dynamic', function(req, res){
    let lis = '';

    for(let i=0;i<5;i++){
        lis = lis + '<li>coding</li>';
    }

    let time = Date();

    let output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        Hello, Dynamic!!
        <ul>
            ${lis}
        </ul>
        ${time}
    </body>
    </html>`;
    res.send(output);
})

app.get('/login', function(req, res){
    res.send('Login please');
});

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});
