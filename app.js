var express = require('express');
var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');

var path = require('path');

app.use(express.static(path.join(__dirname , 'public')));

//routes
app.get('/', routes.home);

app.get('/gameofthrones/:id' , routes.parts);

app.get('*' , routes.notfound);
//listen
app.listen(process.env.PORT || 3000);