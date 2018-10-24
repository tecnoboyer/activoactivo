const { io } = require('../server');



io.on('connection', (client) => {

    console.log('Usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido',
        codigo: 'Queremos darte el mejor servicio'

    });





    client.on('disconnect', () => {
        console.log('Usuario desconectdo');
    });

    /// Escuchar al cliente

    client.on('enviarMensaje', (data, callback) => {


        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salió bien!'
        //     });

        // } else {

        //     callback({
        //         resp: 'Todo salió bien!'
        //     });
        // }


    })

});