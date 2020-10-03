const app = require('./app')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    socket.on('join', data => {
        // join to chat
        socket.join(data.room)
        socket.broadcast.to(data.room).emit(
            'joined chat',
            {message: 'has joined to this chat'}
        )
    })

    socket.on('leave', data => {
        // leave from chat
        socket.broadcast.to(data.room).emit(
            'left chat',
            {message: 'has left to this chat'}
        )
        socket.leave(data.room)
    })

    socket.on('message', data => {
        // send and get a new message
        io.in(data.room).emit(
            'new message',
            {userId: data.userId, message: data.message}
        )
    })
});

module.exports = http
