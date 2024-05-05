import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { socket } from '../socket';
import './ChatComponents.css';

export function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    socket.on('receive message', (data) => {
      setEvents((prevEvents) => [...prevEvents, data]);
    });

    return () => {
      socket.off('receive message');
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
        <div className="event-wrapper"  key={index}>
          <div className="event-text">
            <ReactMarkdown key={index} components={components}>
              {event}
            </ReactMarkdown>
          </div>
          <div className="border"></div>
        </div>
      ))}
    </div>
  );
}
