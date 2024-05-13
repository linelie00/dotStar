import React, { useState, useEffect } from 'react';
import { socket } from '../socket';
import '../Chat.css';

export function MyForm() {
  const [charId, setCharId] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    setCharId('user1');
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  function onSubmit(event) {

    event.preventDefault();
    socket.timeout(5000).emit('message', charId, value, () => {
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
