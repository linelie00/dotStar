const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connection");
  socket.on("init", (payload) => {
    console.log(payload);
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  socket.on('foo', (value, callback) => {
    console.log('foo :', value);
    callback('Data received and processed successfully');
    io.emit("foo", value);
  });

  socket.on('login', (user, callback) => {  
    console.log('login :', user);
    socket.join(room);
    io.to(room).emit("login", user);
    callback('Data received and processed successfully');
  });

  socket.on('join', (user, room) => {
    console.log('join :', user, room);
    socket.join(room);
    socket.join(user['id']);
    io.to(room).emit('join', user);
    socket.emit('welcome', user);
    //callback('Data received and processed successfully');
    console.log(`User ${user.id} joined room ${room}`);
  });

  socket.on('leave', (user, room, callback) => {
    console.log('leave :', user, room);
    socket.leave(room);
    socket.to(room).emit("leave", user);
    callback('Data received and processed successfully');
  });

  socket.on('broadcast', (room, char, value, callback) => {
    console.log('broadcast :', char['id'], char['name'], room, value);
    socket.to(room).emit("receive message", char, value);
    callback('Data received and processed successfully');
  });

  socket.on('whisper', (room, userId, value, callback) => {
    console.log('whisper :', userId, value);
    io.to(userId).emit("whisper", room, value);
    callback('Data received and processed successfully');
  });

  socket.on('message', (char, value, callback) => {
    console.log('message :', char['id'], char['name'], value);
    callback('Data received and processed successfully');
    io.emit("receive message", char, value);
  });
});

httpServer.listen(8282);
