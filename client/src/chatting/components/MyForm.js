import React, { useState } from 'react';
import { socket } from '../socket';
import '../Chat.css';

export function MyForm() {
  const [value, setValue] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    socket.timeout(5000).emit('message', value, () => {
      setValue(''); // 메시지 전송 후 textarea 값을 초기화
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
