const express = require('express');
const { join } = require('node:path');
const { Server } = require("socket.io");
// const { createServer } = require('node:http');

const port = 8282;
const app = express();
const server = require('http').createServer(app);
const io = new Server(server);

server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

//소켓 연결
io.on('connection', (socket) => {
  console.log('a user connected');
  let id = socket.id;

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  
  socket.on('Whisper', (msg) => {
    io.to(id).emit('Whisper', msg);
  });
});