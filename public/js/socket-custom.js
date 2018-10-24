var socket = io();
// Los on son para escuchar eventos
socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');

});

// Los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Leonardo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta del server:', resp);

});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

});