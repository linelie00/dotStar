import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
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
        <ReactMarkdown
        components={{
          // 코드 블록을 하이라이트하는 컴포넌트
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}>
        {event}
      </ReactMarkdown>
      ))}
    </ul>
  );
}
