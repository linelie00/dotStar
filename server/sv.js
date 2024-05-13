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

  socket.on('message', (char, value, callback) => {
    console.log('message :', char['id'], char['name'], value);
    callback('Data received and processed successfully');
    io.emit("receive message", char, value);
  });
});

httpServer.listen(8282);
