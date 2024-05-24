import React, { useState } from 'react';
import { socket } from '../../../socket';
import '../../../styles/Chat.css';

export function MyForm({selectedChar}) {
  const [value, setValue] = useState('');

  function onSubmit(event) {
    if (event.target.value.trim() === '') {
      return;
    }

    event.preventDefault();
    /*
    socket.timeout(5000).emit('message', selectedChar, value, () => {
      setValue('');
    });
    */
    socket.timeout(5000).emit('broadcast', "1", selectedChar, value, () => {
      setValue('');
    });
  }

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSubmit(event);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea 
        value={value} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown} 
        rows={4} 
      />
    </form>
  );
}
