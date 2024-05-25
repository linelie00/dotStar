import React, { useState, useEffect } from 'react';
import Chat from '../components/chatting/Chat.js';
import { ConnectionManager } from '../components/chatting/chatComponents/ConnectionManager';
import { socket } from '../socket';
import '../styles/Chat.css';
import { ConnectionState } from '../components/chatting/chatComponents/ConnectionState';

const RoomPage = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [selectedChar, setSelectedChar] = useState({id:'', name:''});

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      setSelectedChar({id:'user1-id', name:'user1'});
    }

    function onDisconnect() {
      setIsConnected(false);
      setSelectedChar({id:'', name:''});
    }

    function onJoinEvent(user) {
      console.log('join :', user);
    }

    function onWelcomeEvent(user) {
      console.log('welcome :', user);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('join', onJoinEvent);
    socket.on('welcome', onWelcomeEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('join', onJoinEvent);
      socket.off('welcome', onWelcomeEvent);
    };
  }, []);

  return (
    <div className="App">
      <ConnectionState isConnected={ isConnected } />
      <ConnectionManager />
      <div class="header"></div>
      <Chat 
      setSelectedChar={setSelectedChar}
      selectedChar={selectedChar}
      />
    </div>
  );
};

export default RoomPage;