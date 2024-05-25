import React, { useState, useEffect } from 'react';
import { socket } from '../../socket';
import { Events } from "./chatComponents/Events";
import { MyForm } from './chatComponents/MyForm';
import CharacterSelect from "./chatComponents/CharacterSelectBar";
import '../../styles/Chat.css';

export default function App({ setSelectedChar,selectedChar }) {

  const handleCharSelect = (char) => {
    setSelectedChar(char);
  };

  return (
    <div className='chat-bar-container'>
      <div className='bar-container'>
      </div>
      <div className='chat-container'>
        <div className="chat-bar">
        </div>
        <div className="chat-box">
          <Events/>
        </div>
        <div className="chatting">
          <div className="name">
            <CharacterSelect onCharSelect={handleCharSelect} />
          </div>
          <MyForm selectedChar={selectedChar} />
        </div>
      </div>
    </div>
  );
}