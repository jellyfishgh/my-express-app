var server = require('http').createServer()
var io = require('socket.io')(server)
io.on('connection', function(client) {
  console.log('connected')
  client.on('event', function(data) {})
  client.on('disconnect', function() {})
})

module.exports = server
