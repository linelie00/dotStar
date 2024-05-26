import React, { useState, useEffect } from 'react';
import { socket } from '../socket';
import Chat from '../components/chatting/Display.js';
import { ConnectionManager } from '../components/chatting/chatComponents/ConnectionManager';
import { ConnectionState } from '../components/chatting/chatComponents/ConnectionState';
import '../styles/Chat.css';

import anchorIcon from '../assets/images/anchor.svg';
import curserIcon from '../assets/images/curser.svg';
import diceIcon from '../assets/images/dice.svg';
import paleteIcon from '../assets/images/palete.svg';
import textIcon from '../assets/images/text.svg';
import linkIcon from '../assets/images/link.svg';

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
      <div className="header">
        <div className="header-button-container">
          <button className="button">
            <img src={anchorIcon} alt="Home" />
          </button>
          <button className="button">
            <img src={curserIcon} alt="Home" />
          </button>
          <button className="button">
            <img src={diceIcon} alt="Home" />
          </button>
          <button className="button">
            <img src={paleteIcon} alt="Home" />
          </button>
          <button className="button">
            <img src={textIcon} alt="Home" />
          </button>
        </div>
        <div className="breadcrumbs">
          세상의 중심에서/map1
        </div>
        <div className="link-button-container">
        <button className="button">
          <img src={linkIcon} alt="Home" />
          </button>
        </div>
      </div>
      <ConnectionState isConnected={ isConnected } />
      <ConnectionManager />
      <Chat 
      setSelectedChar={setSelectedChar}
      selectedChar={selectedChar}
      />
    </div>
  );
};

export default RoomPage;