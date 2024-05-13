import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { socket } from '../socket';
import './ChatComponents.css';
import user from './user1.jpg';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function Events() {
  const [events, setEvents] = useState([]);

  function preprocessText(text) {
    // *나 #로 시작하는 줄 바로 뒤에 오는 줄바꿈에 대해 두 번의 추가 띄어쓰기를 적용
    return text.replace(/([*#])\n/g, (match, p1) => `${p1}  \n`);
  }

  useEffect(() => {
    const handleMessageReceive = ( char, value ) => {
      setEvents((prevEvents) => [...prevEvents, {char, value: preprocessText(value)}]);
      console.log(value);
    };
  
    socket.on('receive message', handleMessageReceive);
  
    return () => {
      socket.off('receive message', handleMessageReceive);
    };
  }, []);

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <div className="code-wrapper" key={props.key}>
          <SyntaxHighlighter
            {...props}
            children={String(children).replace(/\n$/, '')}
            style={dark}
            language={match[1]}
            PreTag="div"
          />
        </div>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
    p: ({ node, children }) => parseNewLines(children),
  };

  // 줄바꿈을 처리하는 함수
  function parseNewLines(text) {
    if (typeof text === 'string') {
      return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    } else {
      return text;
    }
  }
  
  return (
    <div>
      {events.map((event, index) => (
        <div className="event-wrapper" key={index}>
          <div className="top-table">
            <img src={user} alt="user" />
            <b>{event.char['name']}</b>
          </div>
          <div className="event-text">
            <ReactMarkdown key={index} components={components}>
              {event.value}
            </ReactMarkdown>
          </div>
          {(index + 1) % 5 === 0 && <div className="border"></div>}
        </div>
      ))}
    </div>
  );  
}