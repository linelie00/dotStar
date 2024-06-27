const handleInit = (payload) => {
    console.log(payload);
  };
  
  const handleDisconnect = () => {
    console.log('disconnected');
  };
  
  const handleFoo = (value, callback, io) => {
    console.log('foo :', value);
    callback('Data received and processed successfully');
    io.emit("foo", value);
  };
  
  const handleLogin = (user, callback, socket, io) => {
    console.log('login :', user);
    socket.join(room);
    io.to(room).emit("login", user);
    callback('Data received and processed successfully');
  };
  
  const handleJoin = (user, room, socket) => {
    console.log('join :', user, room);
    socket.join(room);
    socket.join(user['id']);
    io.to(room).emit('join', user);
    socket.emit('welcome', user);
    console.log(`User ${user.id} joined room ${room}`);
  };
  
  const handleLeave = (user, room, callback, socket) => {
    console.log('leave :', user, room);
    socket.leave(room);
    socket.to(room).emit("leave", user);
    callback('Data received and processed successfully');
  };
  
  const handleBroadcast = (room, char, value, callback, socket) => {
    console.log('broadcast :', char['id'], char['name'], room, value);
    socket.to(room).emit("receive message", char, value);
    callback('Data received and processed successfully');
  };
  
  const handleWhisper = (room, userId, value, callback, io) => {
    console.log('whisper :', userId, value);
    io.to(userId).emit("whisper", room, value);
    callback('Data received and processed successfully');
  };
  
  const handleMessage = (char, value, callback, io) => {
    console.log('message :', char['id'], char['name'], value);
    callback('Data received and processed successfully');
    io.emit("receive message", char, value);
  };
  
  module.exports = {
    handleInit,
    handleDisconnect,
    handleFoo,
    handleLogin,
    handleJoin,
    handleLeave,
    handleBroadcast,
    handleWhisper,
    handleMessage
  };
  