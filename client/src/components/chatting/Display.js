import React, { useState } from 'react';
import ContentDisplay from './ContentDisplay';
import '../../styles/Chat.css';

import c_bookIcon from '../../assets/images/c_book.svg';
import c_diceIcon from '../../assets/images/c_dice.svg';
import c_imageIcon from '../../assets/images/c_image.svg';
import c_settingIcon from '../../assets/images/c_settings.svg';
import c_chatIcon from '../../assets/images/c_chat.svg';

export default function App({ setSelectedChar,selectedChar }) {
  const [content, setContent] = useState('chat'); 

  const handleButtonClick = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className='content-container'>
      <div className='chat-nav'>
        <div className='nav-b-container'>
          <button className="button" onClick={() => handleButtonClick('chat')}>
            <img src={c_chatIcon} alt=''/>
          </button>
          <button className="button" onClick={() => handleButtonClick('image')} >
            <img src={c_imageIcon} alt=''/>
          </button>
          <button className="button" onClick={() => handleButtonClick('handout')} >
            <img src={c_bookIcon} alt=''/>
          </button>
          <button className="button" onClick={() => handleButtonClick('macro')} >
            <img src={c_diceIcon} alt=''/>
          </button>
          <button className="button" onClick={() => handleButtonClick('settings')} >
            <img src={c_settingIcon} alt=''/>
          </button>
        </div>
      </div>
      <div className='chat-container'>
        <ContentDisplay 
            content={content}
            setSelectedChar={setSelectedChar}
            selectedChar={selectedChar}
             />
      </div>
    </div>
  );
}