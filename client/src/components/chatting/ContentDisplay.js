import React from 'react';
import Chat from './Chat.js';

const ContentDisplay = ({ content, setSelectedChar, selectedChar }) => {
  return (
      <div className="content-display">
      <div style={{ display: content === 'chat' ? 'block' : 'none' }}>
        <Chat setSelectedChar={setSelectedChar} selectedChar={selectedChar} />
      </div>
      {content === 'image' && <div>Image Content</div>}
      {content === 'handout' && <div>Handout Content</div>}
      {content === 'macro' && <div>Macro Content</div>}
      {content === 'settings' && <div>Settings Content</div>}
    </div>
  );
};

export default ContentDisplay;
