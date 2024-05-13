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

  socket.on('message', (charId, value, callback) => {
    console.log('message :', charId, value);
    callback('Data received and processed successfully');
    io.emit("receive message", charId, value);
  });
});

httpServer.listen(8282);
