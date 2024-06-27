const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const socketRoutes = require('./src/routes/socketRoutes');

io.on("connection", (socket) => {
  console.log("connection");
  socketRoutes(socket, io);
});

httpServer.listen(8282, () => {
  console.log("Server listening on port 8282");
});
