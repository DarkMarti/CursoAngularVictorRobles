
var express = require('express');
var app = express();
/*
var cors = require('cors');

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// use it before all route definitions
app.use(cors());
*/
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static('client'));

app.get('/hola-mundo', function(req, res){
    res.status(200).send('Hola mundo desde una ruta');
});

var messages = [{
    id:1,
    text: 'Bienvenido al chat privado de Socket.io y NodeJS de Víctor Robles',
    nickname: 'Bot - victorroblesweb.es'
}];

io.on('connection', function(socket){
    console.log("El cliente con IP: "+socket.handshake.address+ " se ha conectado.");

    socket.emit('messages', messages);

    socket.on('add-message', function(data){
        messages.push(data);

        io.socket.emit('messages', messages);
    });
});

server.listen(6677, function(){
    console.log('Servidor está funcionando en http://localhost:6677');
})