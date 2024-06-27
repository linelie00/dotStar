const {
    handleInit,
    handleDisconnect,
    handleFoo,
    handleLogin,
    handleJoin,
    handleLeave,
    handleBroadcast,
    handleWhisper,
    handleMessage
  } = require('../controllers/socketController');
  
  module.exports = (socket, io) => {
    socket.on("init", handleInit);
  
    socket.on('disconnect', handleDisconnect);
  
    socket.on('foo', (value, callback) => handleFoo(value, callback, io));
  
    socket.on('login', (user, callback) => handleLogin(user, callback, socket, io));
  
    socket.on('join', (user, room) => handleJoin(user, room, socket));
  
    socket.on('leave', (user, room, callback) => handleLeave(user, room, callback, socket));
  
    socket.on('broadcast', (room, char, value, callback) => handleBroadcast(room, char, value, callback, socket));
  
    socket.on('whisper', (room, userId, value, callback) => handleWhisper(room, userId, value, callback, io));
  
    socket.on('message', (char, value, callback) => handleMessage(char, value, callback, io));
  };
  