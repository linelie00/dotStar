import React, { useState } from 'react';
import { socket } from '../socket';
import '../Chat.css';

export function MyForm({selectedChar}) {
  const [value, setValue] = useState('');

  function onSubmit(event) {

    event.preventDefault();
    socket.timeout(5000).emit('message', selectedChar, value, () => {
      setValue('');
    });
  }

  function handleInputChange(event) {
    if (event.target.value.trim() === '') {
      setValue('');
      return;
    }
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
