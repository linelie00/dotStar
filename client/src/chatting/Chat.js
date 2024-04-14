import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './chat.css';

const socket = io();

function ChatApp() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      socket.emit('chat message', input);
      setInput('');
    }
  };

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages([...messages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, [messages]);

  return (
    <div>
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form id="form" onSubmit={handleMessageSubmit}>
        <input id="input" autoComplete="off" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatApp;
