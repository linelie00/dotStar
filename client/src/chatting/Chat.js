import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { Events } from "./components/Events";
import { MyForm } from './components/MyForm';
import CharacterSelect from "./components/CharacterSelectBar";
import './Chat.css';

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
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

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  const handleCharSelect = (char) => {
    setSelectedChar(char);
  };

  return (
    <div className="App">
      <ConnectionState isConnected={ isConnected } />
      <ConnectionManager />
      <div class="header"></div>
      <div className='chat-bar-container'>
        <div className='bar-container'>
        </div>
        <div className='chat-container'>
          <div className="chat-bar">
          </div>
          <div className="chat-box">
            <Events events={ fooEvents } />
          </div>
          <div className="chatting">
            <div className="name">
              <CharacterSelect onCharSelect={handleCharSelect} />
            </div>
            <MyForm selectedChar={selectedChar} />
          </div>
        </div>
      </div>
    </div>
  );
}