import React, { useState, useEffect } from 'react';
import { socket } from '../../socket';
import { Events } from "./chatComponents/Events";
import { MyForm } from './chatComponents/MyForm';
import CharacterSelect from "./chatComponents/CharacterSelectBar";
import '../../styles/Chat.css';
import f_imageIcon from '../../assets/images/f_image.svg';
import more from '../../assets/images/more_round.svg';
import add from '../../assets/images/add_round.svg';


export default function App({ setSelectedChar,selectedChar }) {
  const handleCharSelect = (char) => {
    setSelectedChar(char);
  };

  return (
        <div className="chat-box-container">
        <div className="chat-bar">
          <div>진행창</div>
          <div className="chat-bar-button-container">
              <button className="button">
                <img src={more} alt=''/>
              </button>
              <button className="button">
                <img src={add} alt=''/>
              </button>
            </div>
        </div>
        <div className="chat-box chat">
            <Events/>
        </div>
        <div className="chatting">
            <div className="name">
                <CharacterSelect onCharSelect={handleCharSelect} />
                <div className="name-img-container">
                <img src={f_imageIcon} alt="profile" className="name-img" />
                </div>
            </div>
            <MyForm selectedChar={selectedChar} />
            </div>
        </div>
  );
}