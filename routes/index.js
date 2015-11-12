var express = require('express');
var WebSocket = require('../bin/www');
var router = express.Router();

var grupo = 'juego';



router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/juego', function(req, res, next) {
    res.render('juego', { title: 'FIREWALL' });

    WebSocket.io.on('connection', function (socket){
        socket.join(grupo);
        socket.emit('bienvenida', {title: 'Bienvenido Jugador', text: 'Es hora del Juego'});
        socket.on('mover', function (object){
            socket.broadcast.to(grupo).emit('realtime', object);
        });
    });

});

module.exports = router;
