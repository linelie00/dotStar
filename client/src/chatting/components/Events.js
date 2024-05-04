import React, { useState, useEffect } from 'react';
import { socket } from '../socket';

export function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    socket.on('receive message', (data) => {
      // 서버로부터 데이터를 받아와서 events 상태에 추가
      setEvents(prevEvents => [...prevEvents, data]);
    });

    // 컴포넌트가 언마운트될 때 소켓 이벤트 리스너 제거
    return () => {
      socket.off('receive message');
    };
  }, []);

  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>{event}</li>
      ))}
    </ul>
  );
}