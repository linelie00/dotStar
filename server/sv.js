// back/app.js
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

  socket.on('message', (data, callback) => {
    console.log('Received data from client:', data);

    // 여기에 클라이언트로부터 받은 데이터를 처리하는 로직을 추가
    // 예를 들어, 데이터베이스에 저장하거나 다른 클라이언트들에게 브로드캐스팅할 수 있습니다.

    // 클라이언트에게 응답을 보내고 처리 완료를 알림
    callback('Data received and processed successfully');
    io.emit("receive message", data);
  });
});

httpServer.listen(8282);
//io.listen(8282);
