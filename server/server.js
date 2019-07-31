const EXPRESS = require('express');
const SOCKETIO = require('socket.io');
const HTTP = require('http');
const PATH = require('path');

const APP = EXPRESS();

let SERVER = HTTP.createServer(APP)

const publicPath = PATH.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

APP.use(EXPRESS.static(publicPath));

// IO = esta es la comunicación del Backend
module.exports.io = SOCKETIO(SERVER);
require('./sockets/socket');

SERVER.listen(port, err => {

	if (err) throw new Error(err);

	console.log(`Servidor corriendo en puerto ${ port }`);

});
