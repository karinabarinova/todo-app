const app = require('./app')
// const models = require('./models')
const http = require('http')
let port = normalizePort(process.env.PORT || '3000')

app.set('port', port)


// app.listen(port, () => {
//     console.log('Server started')
// })

const server = http.createServer(app);

// return models.sequelize.sync().then(res => {
    server.listen(port)
    server.on('error', onError)
    server.on('listening', onListening)
// })

function normalizePort(value) {
    let port = parseInt(value, 10);

    if (isNaN(port))
        return value;

    if (port >= 0)
        return port;

    return false;
}

function onError(err) {
    if (error.syscall !== 'listen')
        throw error

    let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch(error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privilages');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break;
        default: 
            throw error
    }
}

function onListening() {
    let addr = server.address()
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
    console.log('Listening on ' + bind)
}