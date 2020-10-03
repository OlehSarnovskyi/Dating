const app = require('./app')
const http = require('./chat')

const port = process.env.PORT || 5000
const chatPort = 3000


http.listen(chatPort, () => {
    console.log(`Server for the chat started on ${chatPort}`)
})

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})
