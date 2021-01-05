var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('newMessage', function (message) {
        io.emit('newMessage', message);
        console.log('new chat : ' + message);
    });

    socket.on('disconnect', function (message) {
        console.log('user disconnected');
    });
});

http.listen(3000, function () {
    console.log('listening on : 3000');
});