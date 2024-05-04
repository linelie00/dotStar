import React, { useState } from 'react';
import { socket } from '../socket';
import '../Chat.css';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit('message', value, () => {
      setIsLoading(false);
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

      <button type="submit" disabled={isLoading}>Submit</button>
    </form>
  );
}
