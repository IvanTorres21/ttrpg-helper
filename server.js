const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 7777 ;




app.use(express.static(__dirname +'/www'))




io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('sendImage', data => {
    console.log(data);
    socket.broadcast.emit('changeImage', data)
    });
  socket.on('sendAudio', data => {
      console.log(data);
      socket.broadcast.emit('playAudio', data);
  })
  socket.on('pauseResume', data => {
      socket.broadcast.emit('pauseResume');
  })
});



server.listen(port, () => {
  console.log('listening on *:' + port);
});